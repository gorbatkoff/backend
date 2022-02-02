const express = require('express');  // Импорт Express.js
const {PORT} = require('./config'); // Импорт Порта из конфига
const app = express(); // Создание объекта приложения

app.use(express.json()); // Распознование объекта как JSON 

const taskRoute = require('./routes/route.js') // Импорт роутеров

app.use('/', taskRoute); // Маршрутизация

// fs.readFile('./tasks.json', (err, data) => {
//     if(err) throw err;
//     data = JSON.parse(data)
    
//     console.log(data[1].name);
// })

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port`);} // App listener
);
 