const express = require('express');


const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    debugger;
    res.send('hello world')
});

app.use(router);

module.exports = {app};