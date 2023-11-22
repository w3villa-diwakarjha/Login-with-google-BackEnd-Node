// const GoogleStrategy= require('passport-google-oauth20').Strategy;
// const passport= require('passport');

// passport.use(
//     new GoogleStrategy({
//         clientID:process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         callbackURL: "/auth/google/callback",
//         scope: ["profile","email"],
//     },
//     function(accessToken,refreshToken,profile,callback){
//         callback(null,profile);
//     })
// );

// passport.serializeUser((user,done)=>{
//     done(null,user);
// });
// passport.deserializeUser((user,done)=>{
//     done(null,user);
// });






// passportSetup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

function passportSetup() {
  // Set up your Google OAuth 2.0 strategy here
  passport.use(
    new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    function(accessToken, refreshToken, profile, callback) {
      // Your strategy logic here
      callback(null, profile);
    })
  );

  // Serialize user to the session
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Deserialize user from the session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = passportSetup;
