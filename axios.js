// Commands
// 1. npm init -y
// 2. npm install axios
// axios => promise based library(to make http request)

const axios = require('axios');
async function helper(){
    // makes a http get request to a server
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // your requested information will be inside data key
    console.log(response.data);
}
helper();