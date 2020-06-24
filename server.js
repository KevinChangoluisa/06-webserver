const express = require('express');
const puerto = process.env.PORT || 3000;
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home', {
        pagina: 'Home',
        nombre: 'Kevin'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        pagina: 'About'
    });
})

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
})