var ftpConfig = require('./config');
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: ftpConfig.ftp.user, // NOTE that this was username in 1.x
  password: ftpConfig.ftp.password, // optional, prompted if none given
  host: ftpConfig.ftp.host,
  port: 21,
  localRoot: __dirname + '/api',
  remoteRoot: './api',
  include: ['*', '**/*'], // this would upload everything except dot files
  // include: ['*.php', 'dist/*'],
  exclude: ['build/**/*.map'], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
  deleteRemote: false, // delete ALL existing files at destination before uploading, if true
  forcePasv: true // Passive mode is forced (EPSV command is not sent)
};
console.log(config);
// use with promises
ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
