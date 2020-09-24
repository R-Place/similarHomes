const express = require('express')
const app = express()
const port = 3000
const db = require('../database/index.js')
console.log(db)

app.get('/api/similarHomes', (req, res) => {
  db.getAllHomes((err, homes) => {
    if(err){
      res.status(400).send()
    } else {
      res.status(200).send(homes)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})