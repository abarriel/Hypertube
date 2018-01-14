import { Environment } from '.';
import * as OS from 'opensubtitles-api';

const openSubApi = Environment.getConfig().openSubApi;
const Utils = {
  // OSTestUserAgentTemp
  OpenSubtitles: new OS({
    useragent: 'UserAgent',
    username: openSubApi.username,
    password: openSubApi.password,
  }),
};

export { Utils };
