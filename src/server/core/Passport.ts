import * as passport from 'passport';
import * as bcrypt from 'bcrypt';

import { Environment } from './Environment';
import Users from '../database/queries/users';

const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
const FortyTwoStrategy   = require('passport-42').Strategy;

const configAuth = Environment.getConfig().auth;

passport.serializeUser((profile, done) => {
  console.log('serializeUser: ', profile);
  done(null, profile)
});

passport.deserializeUser((profile, done) => {
  console.log('deseriealseUser: ', profile)
  done(null, profile)
});

passport.use('local', new LocalStrategy({
  callbackURL     : 'http://localhost:8888/',
  passReqToCallback: true
}, async (req: any, username: string , password: string, done: any) => {
  const { user } = req.app.locals;
  if (!await Users.isRegistered({ username: user.username, omniauth: false })) return done({ type: 'db', details: 'User not found' });
  const { password: passU, id } = await Users.getByUsername(user.username, ['password', 'id']);
  if (!await bcrypt.compare(user.password, passU)) return done({ type: 'Auth', details: 'Failed to authenticate' });
  return done(null, { id });
}));

passport.use('42', new FortyTwoStrategy({
  clientID        : configAuth.Auth42.clientID,
  clientSecret    : configAuth.Auth42.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/42/cb'
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  console.log('profile', profile);
  const { login: username, email, image_url: profilePicture, first_name, last_name} = profile._json;
  if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
  const user = await Users.post({ username, email, profilePicture, first_name, last_name});
  return done(null, { username });
}));

passport.use('facebook', new FacebookStrategy({
  clientID        : configAuth.facebookAuth.clientID,
  clientSecret    : configAuth.facebookAuth.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/facebook/cb',
  profileFields: ['email', 'first_name', 'last_name', 'picture.type(large)'],
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  const { email, picture: { data: { url: profilePicture } }, first_name, last_name} = profile._json;
  const username = `${first_name}-${last_name}`;
  if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
  const user = await Users.post({ username, email, profilePicture, first_name, last_name});
  return done(null, profile);
}));

export { passport };
