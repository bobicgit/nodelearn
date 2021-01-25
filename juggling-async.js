const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response) => {
    response.pipe(bl(function (err, data) {
        if (err) {
            console.error(err);
        }
        let responses = [];
        responses.push(data);
        http.get(process.argv[3], (response) => {
            response.pipe(bl((err, data) => {
                if (err) {
                    console.error(err);
                }
                responses.push(data);
                http.get(process.argv[4], (response) => {
                    response.pipe(bl((err, data) => {
                        if (err) {
                            console.error(err);
                        }
                        responses.push(data);
                        responses.forEach(r => {
                            console.log(r.toString());
                        })
                    }));
                });
            }));
        });
    }));
})
