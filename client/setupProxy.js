import { createProxyMiddleware } from "http-proxy-middleware";

const port = process.env.PORT || 5000;

export function express_proxy(app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: `http://localhost:5000`,
    })
  );
}
