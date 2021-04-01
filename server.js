const express = require('express')
const server = express()
const port = process.env.PORT || 3000
const path = require('path')


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}.\nVisit your locally configured Vouched JS Plugin at http://localhost:${port}/static/index.html`)
})

server.use('/static', express.static(path.join(__dirname, 'static')))

server.get('/', (req, res) => {
  res.send(`Check your job results status at https://app.vouched.id after verification.`)
})