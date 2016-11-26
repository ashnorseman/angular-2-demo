/**
 * Create proxy.conf.json
 * with local ip address or real backend address
 */


const childProcess = require('child_process');
const fs = require('fs');
const os = require('os');

const mockPort = 4300;
const realBackendHost = 'resources://www.google.com';


if (process.env.BACKEND) {

  // connect to a real backend
  replaceHost(realBackendHost);
} else {

  // connect to the mock server
  // can not run on windows systems
  if (os.platform() === 'win32') return;

  const getIpCommand = 'ipconfig getifaddr en0';

  childProcess.exec(getIpCommand, (error, ip) => {
    replaceHost(`http://${ip}:${mockPort}`);
  });
}


function replaceHost(host) {
  const templatePath = './proxy.conf.template.json';
  const targetPath = './proxy.conf.json';

  fs.readFile(templatePath, 'utf8', (err, data) => {
    const result = data.replace(/localhost/, host).replace(/\n:/g, ':');

    fs.writeFile(targetPath, result, 'utf8', (err) => {
      if (err) return console.log(err);
    });
  });
}
