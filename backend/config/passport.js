import passport from "passport";
import GoogleStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';
import User from '../models/userModel.js';

dotenv.config();


// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});


const passportSetup = passport.use(
  new GoogleStrategy(
    {
      // options for the twitter start
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/redirect"
    },
    async (token, tokenSecret, profile, done) => {

      console.log(profile)
      // find current user in UserModel
      const currentUser = await User.findOne({
        googleId: profile.id
      });
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
                googleId: profile.id,
                name: profile.displayName,
                file: profile.photos[0].value,
                email: profile.emails[0].value
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);

export default passportSetup



// const newUser =  await new User({
        // googleId: profile.id,
        // name: profile.displayName,
        // file: profile.photos[0].value,
        // email: profile.emails[0].value
//     }).save();

//     if(newUser){
//         done(null, newUser)
//     }