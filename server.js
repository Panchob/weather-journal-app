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
const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

//-------------------------- Endpoints -------------------------//

app.get('/lastEntry', getProjectData);

function getProjectData(req, res){
    res.send(projectData);
}

app.post('/add', postProjectData);

function postProjectData(req, res){
    const data = req.body;

    projectData['temperature'] = data.temperature;
    projectData['date'] = data.date;
    projectData['feelings'] = data.feelings;

    res.send(projectData)
}
