import express from 'express';
const router = express.Router()
import passport from 'passport';
const CLIENT_HOME_PAGE_URL = 'http://localhost:3000'
import generateToken  from '../utils/generateToken.js'

// auth login
router.get('/login/success', async (req, res) => {
 if (req.user) {
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
      token: generateToken(req.user._id),
      follower: req.user.follower,
      following: req.user.following,
      gender: req.user.gender,
      mobileNumber: req.user.mobileNumber,
      location: req.user.location,
      file: req.user.file
    });
  }
});

// auth logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google',{
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed",
}));

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

export default router