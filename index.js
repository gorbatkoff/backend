const express = require('express')
const taskRoute = require('./routes/route.js')

const PORT = 4001;
const app = express();

app.use(express.json());

app.use('/', taskRoute);

app.listen(PORT, () => console.log(`Server is listening on ${PORT} port`));
