const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&appid=86bf9314a59aa62020c8d34c9cadb441';
const country = ',us';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', generate);

function generate(e){
    const zip = document.getElementById('zip').value;
    console.log(zip);
    getWeather(baseURL, zip, country, key);
}

const getWeather = async (baseURL, zip, country, key)=>{
    const res = await fetch(baseURL+zip+country+key)
    
    try {
        const data = await res.json();
        return data;

    }
    catch(error) {
        console.log("error", error);
    }
}