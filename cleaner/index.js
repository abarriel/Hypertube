const fs = require('fs');
const path = require('path');
const moment = require('moment');
const rmdir = require('rmdir');

function getDirectories() {
  return new Promise((resolve, reject) => {
    fs.readdir('../public/upload', async (err, directories) => {
      if (err) return reject(err)
      resolve(directories);
    });
  });
}

getDirectories()
  .then(directories => {
    directories.forEach(dir => {
      const dirPath = path.join('../public/upload', dir);
      fs.stat(dirPath, (err, infos) => {
        if (err) throw err;
        if (moment(infos.atime).add(1, 'months').format() < moment().format()) {
          rmdir(dirPath, e => {
            if (e) throw e
            else console.log(dir, 'is successfully deleted !');
          });
        }
      });
    });
  })
  .catch(() => {
    console.log('Something happened!');
  })
