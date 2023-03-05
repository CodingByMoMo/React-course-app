import passport from "passport";

const auth_routes = (app) => {
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

export { auth_routes };
