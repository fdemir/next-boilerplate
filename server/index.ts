import next from "next";
import fastify from "fastify";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = fastify();

    server.all("*", (req, reply) => handler(req.raw, reply.raw));

    server.listen(port);

    console.log(
      `> Ready on http://localhost:${port} - ${dev ? "dev" : "prod"}`
    );
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
