var express = require('express')
var app = express()
const bodyParser = require('body-parser');
const pako = require('pako')
app.use(bodyParser.text({inflate: true}));
// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
  res.send('hello world')
})

app.post('/inflate-manually-on-server', (req, res) => {
  console.log(`Received: ${req.body}`)
  console.log(`Inflated to: ${pako.inflate(req.body, {to: 'string'})}`)
  res.send('ok')
})

app.post('/inflate-automatic-on-server', (req, res) => {
  console.log(`Received: ${req.body}`)
  res.send('ok')
})

app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
