import {
  createProxyMiddleware,
} from "http-proxy-middleware";

export function express_proxy(app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
