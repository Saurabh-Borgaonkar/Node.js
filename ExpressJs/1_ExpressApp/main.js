const express = require('express')
const app = express()
const port = 3000
const host='127.0.0.1';

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.get('/About', (req, res) => {
  res.send('<h1>This is About page</h1>')
})
app.get('/Projects', (req, res) => {
  res.send('<h1>This is project page</h1>')
})
app.get('/Contact', (req, res) => {
  res.send('<h1>this is my contact</h1>')
})
app.get('/:slug', (req, res) => {
  res.send(`<b>Hello ${req.params.slug}</b>`)
  console.log(req.params);
   console.log(req.query);
})
app.listen(port,host,() => {
  console.log(`Example app listening on port http://${host}:${port}`)
})
