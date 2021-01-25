const mymodule = require('./mymodule.js')  
const path = process.argv[2];
const extension = process.argv[3];
const callback = (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach((file) => { console.log(file); });
};
mymodule(path, extension, callback);