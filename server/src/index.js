const express = require('express')
const app = express()
const port = 8000

app.get('./bd.jason', (req, res) => {
  res.send('bd.json')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
