const port = Number.parseInt(Deno.env.get('PORT') ?? '8080');

const server = Deno.listen({ port });
console.log(`http://localhost:${port}/`);

for await (const conn of server) {
  handleConn(conn);
}

async function handleConn(conn: Deno.Conn) {
  const requests = Deno.serveHttp(conn);
  for await (const request of requests) {
    request.respondWith(new Response('Hello World from Deno'));
  }
}
