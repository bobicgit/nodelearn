const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('error', (error) => {
        console.error(error);
    });
    response.on('data', function (data) {
        console.log(data);
    });
})
