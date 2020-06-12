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
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

app.get('/', getProjectData)

function getProjectData(req, res){
    res.send(projectData);
}

app.post('/', postProjectData)

function postProjectData(req, res){
    data = {
        temperature: req.body.weather,
        date: req.body.date,
        response: req.body.response
    }

    projectData.push(data);
    console.log(projectData);

}
