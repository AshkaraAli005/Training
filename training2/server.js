const express = require('express')
const app = express()
const port = 8000
let mes='no message'
app.get('get/messages', (req, res) => {
  res.send(mes)
})
app.post('post/message', (req, res) => {
    mes=
    res.send(mes)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})