import * as passport from 'passport';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { Environment } from './Environment';
import { Users } from '../database/queries';

const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy   = require('passport-local').Strategy;
const FortyTwoStrategy   = require('passport-42').Strategy;
const TwitterStrategy 	= 		require('passport-twitter').Strategy;
const GithubStrategy	=		require('passport-github').Strategy;
const SpotifyStrategy	=		require('passport-spotify').Strategy;
const GoogleStrategy	=		require('passport-google-oauth').OAuth2Strategy;

const configAuth = Environment.getConfig().auth;

passport.serializeUser((user, done) => {
  done(null, user)
});

passport.deserializeUser((user, done) => {
  done(null, user)
});

passport.use('local', new LocalStrategy({
  callbackURL     : 'http://localhost:8888/api/auth/local/cb',
  passReqToCallback: true
}, async (req: any, username: string , password: string, done: any) => {
  try {
    const { user } = req.app.locals;
    if (!await Users.isRegistered({ username : user.username, email: user.email, })) return done({ type: 'db', details: 'User not found' });
    const { password: passU, id, profilePicture, lang, history, myList } = await Users.getByUsername(user.username, ['password', 'id', 'profilePicture', 'lang', 'history', 'myList']);
    console.log(user.password, user.username);
    if (!await bcrypt.compare(user.password, passU)) return done({ type: 'Auth', details: 'Failed to authenticate' });
    return done(null, { id, username, omniauth: false, profilePicture, lang, history, myList });
  } catch (err) {
    return done({ type: 'Auth', details: 'Failed', err });
  }
}));

passport.use('42', new FortyTwoStrategy({
  clientID        : configAuth.Auth42.clientID,
  clientSecret    : configAuth.Auth42.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/42/cb'
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  try {
    const { login: username, email, image_url: profilePicture, first_name, last_name} = profile._json;

    let user = await Users.isRegistered({ username, email });
    if(user.provider !== '42') {
      return done({ type: 'Auth', details: 'You need to register using your local account' });
    }
    if (!user) user = await Users.post({ provider: '42' ,username, email, profilePicture, first_name, last_name});
    console.log("42", user);
    return done(null, user);
  } catch (err) {
    return done({ type: 'Auth', details: 'Failed', err });
  }
}));

passport.use('facebook', new FacebookStrategy({
  clientID        : configAuth.Facebook.clientID,
  clientSecret    : configAuth.Facebook.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/facebook/cb',
  profileFields: ['email', 'first_name', 'last_name', 'picture.type(large)'],
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  try {
    const { email, picture: { data: { url: profilePicture } }, first_name, last_name} = profile._json;
    const username = `${first_name}-${last_name}`;

    let user = await Users.isRegistered({ username, email });
    if(user.provider !== 'facebook') {
      return done({ type: 'Auth', details: 'You need to register using your local account' });
    }
    if (!user) user = await Users.post({ provider: 'facebook' ,username, email, profilePicture, first_name, last_name});
    return done(null, user);
  } catch (err) {
    return done({ type: 'Auth', details: 'Failed', err });
  }
}));

passport.use('twitter', new TwitterStrategy({
  consumerKey        : configAuth.Twitter.clientID,
  consumerSecret     : configAuth.Twitter.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/twitter/cb',
  includeEmail: true,
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  try {
    const { username, emails, photos } = profile;
    const email = emails[0].value;
    const profilePicture = _.replace(photos[0].value || '', '_normal', '');
    let user = await Users.isRegistered({ username, email });
    if(user.provider !== 'twitter') {
      return done({ type: 'Auth', details: 'You need to register using your local account' });
    }
    if (!user) user = await Users.post({ provider: 'twitter' ,username, email, profilePicture });
    return done(null, user);
  } catch (err) {
    return done({ type: 'Auth', details: 'Failed', err });
  }
}));

passport.use('github', new GithubStrategy({
  clientID        : configAuth.Github.clientID,
  clientSecret     : configAuth.Github.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/github/cb',
  scope: ['user:email'],
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  try {
    const { username, emails, photos } = profile;
    const email = emails[0].value;
    const profilePicture = photos[0].value;
    let user = await Users.isRegistered({ username, email });
    if(user.provider !== 'github') {
      return done({ type: 'Auth', details: 'You need to register using your local account' });
    }
    if (!user) user = await Users.post({ provider: 'github' ,username, email, profilePicture });
    return done(null, user);
  } catch (err) {
    return done({ type: 'Auth', details: 'Failed', err });
  }
}));

passport.use('google', new GoogleStrategy({
  clientID        : configAuth.Google.clientID,
  clientSecret     : configAuth.Google.clientSecret,
  callbackURL: 'http://localhost:8888/api/auth/google/cb',
  scope: ['profile', 'email']
}, async (token: any, refreshToken: any, profile: any, done: any) => {
  try {
    const { emails, photos, name } = profile;
    const email = emails[0].value;
    const profilePicture = _.replace(photos[0].value || '', '?sz=50', '');
    const { familyName: lastName, givenName: firstName } = name;
    const username = `${firstName}-${lastName}`;
    let user = await Users.isRegistered({ username, email });
    if(user.provider !== 'google') {
      return done({ type: 'Auth', details: 'You need to register using your local account' });
    }
    if (!user) user = await Users.post({ provider: 'google' ,username, email, firstName, lastName, profilePicture });
    return done(null, user);
  } catch (err) {
    return done({ type: 'Auth', details: 'Failed', err });
  }
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
//   // // if (await Users.isRegistered({ username, email })) return done({ type: 'db', details: 'User already register under a similar login' });
//   // const user = await Users.post({ username, email, firstName, lastName, profilePicture });
//   return done(null, profile);
// }));

export { passport };
