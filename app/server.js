const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.render('../public/index', { title: 'Store1', bodyClass : 'homePage' })
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})