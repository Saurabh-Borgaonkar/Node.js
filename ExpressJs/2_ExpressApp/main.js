const express = require('express')
const blog = require('./routes/blog') //routes
const shop = require('./routes/shop')
const app = express()

const port = 3000
const host='127.0.0.1'

//its middlware
app.use(express.static('public'));
app.use('/blog',blog);
app.use('/shop',shop);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//all are requests
app.post('/', (req, res) => {
  res.send('Post request executed');
})
app.put('/', (req, res) => {
  res.send('Put request executed');
})
//We can send data in json format
app.get('/json', (req, res) => {
  res.json({a:10,b:20,name:["saurabnh","sauruu"]});
})

//We can send html file using this syntax
app.get('/', (req, res) => {
  res.sendFile('templates/index.html',{root : __dirname});
})

app.listen(port,host,() => {
  console.log(`Example app listening on port http://${host}:${port}`)
})

