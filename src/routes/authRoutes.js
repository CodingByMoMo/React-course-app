import passport from "passport";

const authRoutes = app => {
  // Make call to google oauth and authenticate.
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //Get a profile and access token.
  app.get("/auth/google/callback", passport.authenticate("google"));
};

export {authRoutes};