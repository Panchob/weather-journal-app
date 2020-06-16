const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&appid=86bf9314a59aa62020c8d34c9cadb441';
const country = ',us';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', generate);

function generate(e){
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    // Get current weather from openweathermap.org
    getWeather(baseURL, zip, country, key)
    // Store fetched info.
    .then(function(data){
        postProjectData('/add', {temperature:data.main.temp, date:newDate, feelings:feelings});
        // Update the page with stored information.
        updateUI();
    })
};

const getWeather = async (baseURL, zip, country, key)=>{
    const res = await fetch(baseURL+zip+country+key);
    
    try{
        const data = await res.json();
        return data;
    }
    catch(error) {
        console.log("error", error);
    }
};

const postProjectData = async(url = '', data = {})=>{
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try{
        const newData = await res.json();
        return newData;
    }catch(error){
        console.log("error", error);
    }
};

const updateUI = async() => {
    const request = await fetch('/lastEntry');

    try{
        const lastEntry = await request.json();
        document.getElementById('temp').innerHTML = lastEntry.temperature;
        document.getElementById('date').innerHTML = lastEntry.date;
        document.getElementById('content').innerHTML = lastEntry.feelings;
    }
    catch(error){
        console.log("error", error);
    }
}