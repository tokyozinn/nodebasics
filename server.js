const http = require('http');

const servidor = http.createServer(function (req, resp){
    resp.end(`
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>Casa do código</h1>
        </body>
    </html>
    
    `)
});

servidor.listen(3000);