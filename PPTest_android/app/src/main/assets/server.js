const express = require('express')
var cors = require('cors')
const app = express()
const port = 3002
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/js', express.static('js'))

app.get('/', (req, res) => res.sendFile(__dirname +'/ppTest.html'))
app.get('/loadpage', cors(), function (req, res, next) {
    console.log("paypal page loaded");
    const https = require('https');
    https.get('https://www.google.com/search?q=paypal', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        res.send(data);
    });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))