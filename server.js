projectData = {};
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port, listening);

function listening(){
    console.log('server running')
    console.log(`running on localhost: ${port}`)
}
