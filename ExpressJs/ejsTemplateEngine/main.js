const express = require('express')
let ejs = require('ejs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let title="Ejs templates";
    let mentor="Saurabh borgaonkar";
    let arr=[1,2,3];
  res.render('index',{tittle : title,mentor : mentor,arr : arr});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
