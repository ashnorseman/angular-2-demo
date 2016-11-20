/**
 * Create proxy.conf.json with local ip address
 */


const fs = require('fs');
const childProcess = require('child_process');

const command = 'ipconfig getifaddr en0';


childProcess.exec(command, (error, ip) => {

  fs.readFile('./proxy.conf.template.json', 'utf8', (err, data) => {
    const result = data.replace(/\/\/([^:]+)/, `//${ip}`).replace(/\n:/g, ':');

    fs.writeFile('./proxy.conf.json', result, 'utf8', (err) => {
      if (err) return console.log(err);
    });
  });
});
