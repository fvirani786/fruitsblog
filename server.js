const express = require('express');
const app = express(); // our app
const PORT = process.env.PORT || 3000;

// ------------ DATA -----------------
// inside of fruits.js
const { fruits } = require('./models/fruits');
const { meats } = require('./models/meats')

// ------------ MIDDLEWARE ------------
app.set('view engine', 'ejs');
app.use('/', express.static('public'));
//app.use(express.static('CSS'))

// ------------ ROUTES ---------------
// ******* INDEX ROUTE **********
app.get('/fruits', (req, res) => {
    // send index.ejs with array of fruits
    res.render('fruits/index', { allFruits: fruits });
});

app.get('/meats', (req, res) => {
    // send index.ejs with array of fruits
    res.render('meats/index', { allMeats: meats });
});


//that's recipes
app.get('/recipes', (req, res) => {
    res.render('recipes');
});
//that's about-me
app.get('/about-me', (req, res) => {
    res.render('about-me');
});

///world-cuisines
app.get('/world-cuisines', (req, res) => {
    res.render('world-cuisines');
});

//contact
app.get('/contact', (req, res) => {
    res.render('contact');
});

//search 
app.get('/search', (req, res) => {
    res.render('search');
});

// ******* SHOW ROUTE **********
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfFruitsArray);
    if (idx >= fruits.length) {
        // res.send('There is no fruit at that index.'); // one solution
        // res.send(fruits);
        res.render('404', {});
    } else {
        // res.send(fruits[idx]);
        res.render('fruits/show', { fruit: fruits[idx] });
    }
});

// ----------- LISTEN FOR SERVER ----------
app.listen(PORT, () => {
    console.log('🎧 Server is running on PORT 🎧', PORT);
});