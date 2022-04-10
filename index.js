const express = require('express')
const path = require("path");
const app = express();
const router = express.Router();
const port = process.env.port || 3000

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'))
})

//add the router
app.use('/', router);
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});