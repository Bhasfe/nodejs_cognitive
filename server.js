var express = require('express');
var app = express();
var path = require('path');

app.use(express.urlencoded({
    extended: true
}))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/search', (req, res) => {
    const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
    const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;
    
    const key = '<your-subscription-key';
    const endpoint = '<your-endpoint>';
    
    const computerVisionClient = new ComputerVisionClient(
      new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint
    );

    const describeURL = req.body.imageURL
    console.log('Analyzing URL image to describe...', describeURL.split('/').pop());
    const caption = new Promise((resolve) => {
        resolve(computerVisionClient.describeImage(describeURL))
    })
    caption.then((elm) => {
        res.json({ response: elm.captions[0].text })
    }).catch(err => console.log(err));
    
})

app.use(express.static('public'))

app.listen(3000);