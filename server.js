const express = require('express')
const app = express()

app.use(express.static('dist'))

app.listen(8081, ()=> console.log('server is running'))