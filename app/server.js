const express = require('express')
const router = require('./routers')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '../public'))

app.set('view engine', 'pug')

// console.log(path.join(__dirname, '../public/views/pages/register'))

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})