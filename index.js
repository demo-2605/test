const express = require('express');
const app = express();
const port = 8080;
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
fakeApi = () => {
  return [
    {
      name: 'Katarina',
      lane: 'midlaner'
    },
    {
      name: 'Jayce',
      lane: 'toplaner'
    },
    {
      name: 'Heimerdinger',
      lane: 'toplaner'
    },
    {
      name: 'Zed',
      lane: 'midlaner'
    },
    {
      name: 'Azir',
      lane: 'midlaner'
    }
  ];
}

categories = ['jazz', 'soul', 'French variety']

products = [
    {
      id: 'the-jazz-story',
      image: 'https://3jsapw7i3u.eu-west-1.awsapprunner.com/uploads/thumbnail_the_jazz_story_eab962a04b.jpeg',
      name: 'The Jazz Story',
      description: "Édith Piaf was a French singer-songwriter, cabaret performer and film actress noted as France's national chanteuse and one of the country's most widely known international stars. Piaf's music was often autobiographical, and she specialized in chanson and torch ballads about love, loss and sorrow"
    },
    {
      id: 'the-jazz-story',
      image: 'https://3jsapw7i3u.eu-west-1.awsapprunner.com/uploads/thumbnail_the_jazz_story_eab962a04b.jpeg',
      name: 'The Jazz Story 2',
      description: "Édith Piaf was a French singer-songwriter, cabaret performer and film actress noted as France's national chanteuse and one of the country's most widely known international stars. Piaf's music was often autobiographical, and she specialized in chanson and torch ballads about love, loss and sorrow"
    },
    {
      id: 'the-jazz-story',
      image: 'https://3jsapw7i3u.eu-west-1.awsapprunner.com/uploads/thumbnail_the_jazz_story_eab962a04b.jpeg',
      name: 'The Jazz Story 3',
      description: "Édith Piaf was a French singer-songwriter, cabaret performer and film actress noted as France's national chanteuse and one of the country's most widely known international stars. Piaf's music was often autobiographical, and she specialized in chanson and torch ballads about love, loss and sorrow"
    },
    {
      id: 'the-jazz-story',
      image: 'https://3jsapw7i3u.eu-west-1.awsapprunner.com/uploads/thumbnail_the_jazz_story_eab962a04b.jpeg',
      name: 'The Jazz Story 4',
      description: "Édith Piaf was a French singer-songwriter, cabaret performer and film actress noted as France's national chanteuse and one of the country's most widely known international stars. Piaf's music was often autobiographical, and she specialized in chanson and torch ballads about love, loss and sorrow"
    }
  ]

app.get('/', (req, res) => {
res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true, categories: categories, products: products});
});

app.listen(port, () => console.log(`App listening to port ${port}`));
