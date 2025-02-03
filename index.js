const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const sequelize = require('./config/db')

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection to the database has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});

