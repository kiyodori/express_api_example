const express = require('express')
const app = express()
const port = 3000
let booklog = {} // 本来は配列にすべきだが、複雑になるので省略

app.use(express.json())

app.post('/booklog', (req, res) => {
  booklog = req.body

  if (!(booklog.name && booklog.text)) {
    return res.json({
      "ok": false,
      "error": "invalid parameter"
    })
  }

  res.json({
    "ok": true,
    "booklog": booklog
  })
})

app.get('/booklog', (req, res) => {
  res.json({
    "ok": true,
    "booklog": {
      1: booklog
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
