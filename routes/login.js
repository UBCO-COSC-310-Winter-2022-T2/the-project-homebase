// Create login router with express
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/forgot', (req, res) => {
    res.render('forgotpassword');
});

module.exports = router;

