const express = require("express");
const app = express();
const {engine} = require('express-handlebars');

const port = 5080


 /**
 * Configuração do parser para requisições post
 */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'))




app.set('views', __dirname + '/views');
app.engine('.hbs', engine({ defaultLayout: 'planB', extname: '.hbs' }));
app.set('view engine', '.hbs');





/**
 *   static paths
 */

app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
app.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
app.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/mask', express.static('./node_modules/jquery-mask-plugin/dist'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/public/vendor'));




/**
 * Requisições
 */

app.get('/', (req, res) => {
//instead of res.render('main', {layouts: 'index'});

    res.render("index")

});

app.listen(port, () => console.log(`Running in port: ${port}`));