require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController');

const app = express();

// to include form data into req parameter
app.use(bodyparser.urlencoded({
    extended: true
}));

// to convert into json
app.use(bodyparser.json());

// setting up the view engine
app.set('views','./views'); // default
app.engine('hbs', exphbs({ extname: 'hbs', defaultlayout: 'main', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', 'hbs');

// PORT
app.listen(3000, ()=>{
    console.log('Express server started at port: 3000');
});

// middlewares
app.use('/employee', employeeController);