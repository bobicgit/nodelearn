const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(process.argv[3]);
    stream.pipe(res);
    // res.write(stream);
    // res.end();
})
server.listen(process.argv[2]);