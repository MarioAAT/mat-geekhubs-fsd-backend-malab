const express = require("express");
const cors = require('cors');
const app = express ();

require('dotenv').config();

let corsOption = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(cors())

app.use(express.json());

const rutas = require('./rutas')
app.use('/api', rutas)

const db = require('./db')
const PORT = process.env.PORT || 3000 

db.then(() => {
    app.listen (PORT, () => {
        console.log(`Servidor levantado en puerto ${PORT}` );
    })
})
    .catch((err) => console.log (err.message))

