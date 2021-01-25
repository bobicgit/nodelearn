const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, cb) => {
    fs.readdir(directory, (err, list) => {
        if (err) {
            return cb(err);
        }

        const files = list.filter((element) => {
            return path.extname(element) === `.${extension}`;
        })
        cb(null, files);
    })
}