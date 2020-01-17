const express = require('express');

const router = express.Router();

// import db
const db = require('../config/database');

// import model
const Bill = require('../models/Bill');

// Get Gig List
router.get('/', (req, res) =>
    Bill.findAll()
    .then(bills => {
        console.log(bills);
        // res.sendStatus(200);
        res.send(bills);
    })
    .catch(err => console.log(err)));

// Create a Bill
router.post('/create', (req, res) => {
    let entry = req.body;
    console.log(req);
    const data = {
        "item": entry.item,
        "pending_bill": entry.pending_bill,
    }


    // Insert into table
    Bill.create(data)
        .then(gig => res.redirect('/bills'))
        .catch(err => console.log(err.message))
})

module.exports = router;