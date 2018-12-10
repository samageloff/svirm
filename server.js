const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

console.log('!!PORT!!', PORT)
console.log(process.env.NODE_ENV)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
))
