const express = require('express')
const http= require('http')
const app = express() 
const LINKEDIN_URL = 'https://linkedin.com/in/aviggiano'
const PORT = 3000

app.set('port', process.env.PORT || PORT)

const httpServer = http.createServer(app)
httpServer.listen(app.get('port'))

app.get('*', function(req, res) {
	res.redirect(LINKEDIN_URL); 
})
