const express = require('express')
const cors = require('cors')
const data = require('./Data')

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  })
)

//Routes
app.get('/', (req, res) => {
  res.status(200).json({
    content: 'API get request response',
  })
})

app.post('/', (req, res) => {
  console.log(req.body)

  res.status(200).json({
    success: true,
    content: data,
  })
})

app.listen(9000, () => console.log('API started on port 9000'))
