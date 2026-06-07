import { VercelRequest, VercelResponse } from "@vercel/node";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntry: ServerEntry | null = null;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntry) {
    try {
      const mod = await import("../dist/server/entry.server.mjs");
      serverEntry = mod.default || mod;
    } catch (error) {
      console.error("Failed to load server entry:", error);
      throw error;
    }
  }
  return serverEntry;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const serverEntryModule = await getServerEntry();

    const url = new URL(
      request.url || "/",
      `http://${request.headers.host || "localhost"}`
    );

    const fetchRequest = new Request(url, {
      method: request.method,
      headers: request.headers as HeadersInit,
      body:
        request.method !== "GET" && request.method !== "HEAD"
          ? JSON.stringify(request.body)
          : undefined,
    });

    const fetchResponse = await serverEntryModule.fetch(fetchRequest, {}, {});

    const buffer = await fetchResponse.arrayBuffer();
    const headers = Object.fromEntries(fetchResponse.headers.entries());

    response.status(fetchResponse.status);
    Object.entries(headers).forEach(([key, value]) => {
      response.setHeader(key, value);
    });
    response.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Handler error:", error);
    response.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
