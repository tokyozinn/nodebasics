module.exports = (app) => {

    const db = require('../../config/database')

    app.get('/', function (req, resp) {
        resp.send(`
            <html>
                <head>
                    <meta charset="UTF-8">
                 </head>
                <body>
                    <h1>Casa do código do André</h1>
                </body>
            </html>    
    
        `)
    })

    app.get('/livros', function (req, resp) {

        db.all("SELECT * FROM livros", function (erro, resultados) {
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }

            );

        })

    });
}
