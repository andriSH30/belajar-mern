const express = require('express');
const app = express()

app.use(() => {
  console.log('Server Done...')
})

app.listen(4000);