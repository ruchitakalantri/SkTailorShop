const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const shopRoutes = require('./routes/shop');

// use of ejs : Embedded JavaScript templating
app.set('view engine', 'ejs');

//path.join returns a normalized path by merging two paths together
//__dirname is the absolute path to the directory containing the source file
//path.join(__dirname, 'public') => /Users/ruchitarathi/Documents/NodeJS/SkTailorShop/public

app.use(express.static(path.join(__dirname, 'public')));

// middelware to import shop controller
app.use(shopRoutes);

app.listen(3000);
