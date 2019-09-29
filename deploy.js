var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: '*', // NOTE that this was username in 1.x
  password: '*', // optional, prompted if none given
  host: 'ftp.strato.de',
  port: 21,
  localRoot: __dirname + '/api',
  remoteRoot: '.',
  include: ['*', '**/*'], // this would upload everything except dot files
  // include: ['*.php', 'dist/*'],
  exclude: ['build/**/*.map'], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
  deleteRemote: false, // delete ALL existing files at destination before uploading, if true
  forcePasv: true // Passive mode is forced (EPSV command is not sent)
};

// use with promises
ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err));
