const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/contact', (req, res) => {
    res.render('contact-me')
})

// router.get('{*}', (req, res) => {
//     res.render('404')
// })

module.exports = router;