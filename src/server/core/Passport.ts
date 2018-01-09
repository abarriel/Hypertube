import { Environment } from './Environment';

const FacebookStrategy = require('passport-facebook').Strategy;

const configAuth = Environment.getConfig().auth;

module.exports = (passport: any) => {

  passport.serializeUser(function(user, done) {
    // console.log(user);
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
      done(null, { user: 'user'})
  });

  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : 'http://localhost:8888/auth/facebook/cb',
    passReqToCallback: true
  }, (req: any, token: any, refreshToken: any, profile: any, done: any) => {
   // check if user is already looked
    process.nextTick(() => {
      console.log('token', token);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      return done(null, { user: 'newUser' });
    })
  })
)
};
