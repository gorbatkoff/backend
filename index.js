const express = require('express');  // Импорт Express.js
const {PORT} = require('./config'); // Импорт Порта из конфига
const app = express(); // Создание объекта приложения
const cors = require('cors'); // Providing middleware
const cookieParser = require('cookie-parser');


app.use(cors()); // usage cors middleware
app.use(express.json()); // Распознование объекта как JSON 
app.use(cookieParser()); // Cookie parsing for autorization

const taskRoute = require('./routes/route.js'); // Импорт роутеров

app.use('/', taskRoute); // Маршрутизация

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port`);} // App listener
);
 