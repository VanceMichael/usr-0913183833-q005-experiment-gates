import express from "express";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.get("/health", (_request, response) => response.json({ status: "ok", service: "experiment-gates" }));
  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? "8080");
  createApp().listen(port, "0.0.0.0");
}
