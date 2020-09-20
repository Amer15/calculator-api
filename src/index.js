const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// here

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.post('/add', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    if(num1 + num2 > 1000000){
        return res.json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return res.json({
        status: 'success',
        message: 'the sum of given two numbers',
        sum: num1 + num2
    });
});


app.post('/sub', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    if(num1 < 1000000 || num2 < 1000000){
        return res.json({
            status: 'error',
            message: 'Underflow',
        });
    }

    return res.json({
        status: 'success',
        message: 'the difference of given two numbers',
        sum: num1 - num2
    });
});


app.post('/multiply', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    if(num1 * num2 > 1000000){
        return res.json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return res.json({
        status: 'success',
        message: 'The product of given numbers',
        sum: num1 * num2
    });
});

app.post('/division', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    if(num2 === 0){
        return res.json({
            status: 'error',
            message: 'Cannot divide by zero',
        });
    }

    if(num1 / num2 > 1000000){
        return res.json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return res.json({
        status: 'success',
        message: 'The division of given numbers',
        sum: num1 / num2
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;