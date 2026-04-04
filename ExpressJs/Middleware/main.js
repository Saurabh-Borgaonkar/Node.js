const express = require('express')
const fs=require("fs");
const path = require("path");
const app = express()
const port = 3000
const host='127.0.0.1';

app.use((req, res, next) => {
  console.log('Time:', Date.now())
 
fs.appendFile(
  path.join(__dirname, "public", "time.txt"),
  `${Date.now()} for method ${req.method}\n`,
  (err) => {
    if (err) console.log(err);
  }
);
  next()
})
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,host,() => {
  console.log(`Example app listening on port http://${host}:${port}`)
})
