const express = require('express')
const http= require('http')
const app = express() 
const LINKEDIN_URL = 'https://linkedin.com/in/aviggiano'
const PORT = 3000
const IP = '127.0.0.1'

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || PORT);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || IP);

http.createServer(app).listen(app.get('port') ,app.get('ip'), function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
});


app.get('*', function(req, res) {
	res.redirect(LINKEDIN_URL); 
})
