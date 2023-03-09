import passport from "passport";
import express from "express";

const auth_router = express.Router();

auth_router.use((req, res, next) => {
  console.log('Action on: ', Date.now())
  next();
})

auth_router.get("/", (req,res, next) => {
  res.send("Hello World");
});

auth_router.get("/auth/google", (req, res, next) => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
});

auth_router.get("/auth/google/callback", (req, res) => {
  passport.authenticate("google");
});

// // define the home page route
// auth_router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// // define the about route
// auth_router.get('/about', (req, res) => {
//   res.send('About birds')
// })

export { auth_router };
