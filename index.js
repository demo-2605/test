const express = require('express');
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine

app.set('view engine', 'hbs');
//Sets handlebars configurations
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

//I would like to use a real api but let's use this for the sake of //the simplicity of the article
fakeApi = () => 'Faker';
app.get('/', (req, res) => {
res.render('main', {layout: 'index', proPlayer: fakeApi()});
});

app.listen(port, () => console.log(`App listening to port ${port}`));
