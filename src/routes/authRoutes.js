import passport from "passport";
import express from "express";

const auth_router = express.Router();

auth_router.use((req, res, next) => {
  console.log('Action on: ', Date.now())
  next()
})

auth_router.get("/google", (req, res) => {
  res.send(
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
});

auth_router.get("/google/callback", (req, res) => {
  res.send(passport.authenticate("google"));
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
