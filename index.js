const express = require('express')
// const taskRoute = require('./routes/route.js')
const {PORT} = require('./config');
const fs = require('fs');

const app = express();

app.use(express.json());

// app.use('/', taskRoute);

fs.readFile('./tasks.json', (err, data) => {
    if(err) throw err;
    data = JSON.parse(data)
    
    console.log(data[1].name);
})

app.listen(PORT, () => console.log(`Server is listening on ${PORT} port`));
