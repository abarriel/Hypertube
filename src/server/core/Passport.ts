import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { Environment } from './Environment';
import Users from '../database/queries/users';

const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
const FortyTwoStrategy   = require('passport-42').Strategy;
const TwitterStrategy 	= 		require('passport-twitter').Strategy;
const GithubStrategy	=		require('passport-github').Strategy;
const SpotifyStrategy	=		require('passport-spotify').Strategy;
const GoogleStrategy	=		require('passport-google-oauth').OAuth2Strategy;
// const LinkedinStrategy 	= 		require('passport-linkedin-oauth2').Strategy;

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
  clientID        : configAuth.Facebook.clientID,
  clientSecret    : configAuth.Facebook.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/facebook/cb',
  profileFields: ['email', 'first_name', 'last_name', 'picture.type(large)'],
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  const { email, picture: { data: { url: profilePicture } }, first_name, last_name} = profile._json;
  const username = `${first_name}-${last_name}`;
  if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
  const user = await Users.post({ username, email, profilePicture, first_name, last_name});
  return done(null, profile);
}));

passport.use('twitter', new TwitterStrategy({
  consumerKey        : configAuth.Twitter.clientID,
  consumerSecret     : configAuth.Twitter.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/twitter/cb',
  includeEmail: true,
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  console.log(profile);
  const { username, emails, photos } = profile;
  const email = emails[0].value;
  const profilePicture = _.replace(photos[0].value || '', '_normal', '');
  if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
  const user = await Users.post({ username, email, profilePicture });
  return done(null, profile);
}));

passport.use('github', new GithubStrategy({
  clientID        : configAuth.Github.clientID,
  clientSecret     : configAuth.Github.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/github/cb',
  scope: ['user:email'],
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  const { username, emails, photos } = profile;
  const email = emails[0].value;
  const profilePicture = photos[0].value;
  if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
  const user = await Users.post({ username, email, profilePicture });
  return done(null, profile);
}));

passport.use('google', new GoogleStrategy({
  clientID        : configAuth.Google.clientID,
  clientSecret     : configAuth.Google.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/google/cb',
  scope: ['profile', 'email']
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  const { emails, photos, name } = profile;
  const email = emails[0].value;
  const profilePicture = _.replace(photos[0].value || '', '?sz=50', '');
  const { familyName: lastName, givenName: firstName } = name;
  const username = `${firstName}-${lastName}`;
  // if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
  const user = await Users.post({ username, email, firstName, lastName, profilePicture });
  return done(null, profile);
}));

// passport.use('spotify', new SpotifyStrategy({
//   clientID        : configAuth.Spotify.clientID,
//   clientSecret     : configAuth.Spotify.clientSecret,
//   callbackURL: 'http://localhost:8888/api/auth/spotify/cb',
//   scope: ['profile', 'email']
// }, async (token: any, refreshToken: any, profile: any, done: any) => {
//   console.log(profile);
//   // const { emails, photos, name } = profile;
//   // const email = emails[0].value;
//   // const profilePicture = _.replace(photos[0].value || '', '?sz=50', '');
//   // const { familyName: lastName, givenName: firstName } = name;
//   // const username = `${firstName}-${lastName}`;
//   // // if (await Users.isRegistered({ username })) return done({ type: 'db', details: 'User already register under a similar login' });
//   // const user = await Users.post({ username, email, firstName, lastName, profilePicture });
//   return done(null, profile);
// }));

export { passport };
