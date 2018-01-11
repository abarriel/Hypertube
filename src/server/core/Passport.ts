import { Environment } from './Environment';
import * as passport from 'passport';

const FacebookStrategy = require('passport-facebook').Strategy;

const configAuth = Environment.getConfig().auth;

passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  console.log('d');
  done(null, { user: 'user'})
});

passport.use(new FacebookStrategy({
  clientID        : configAuth.facebookAuth.clientID,
  clientSecret    : configAuth.facebookAuth.clientSecret,
  callbackURL     : 'http://localhost:8888/api/auth/facebook/cb',
  failureFlash : true,
  passReqToCallback: true
}, (req: any, token: any, refreshToken: any, profile: any, done: any) => {
  // check if user is already looked
  // console.log('FACEBOOK STRATEGY');
  // process.nextTick(() => {
  //   console.log('token', token);
  //   console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    return done(null, { user: profile });
  // })
})
)

export { passport };
