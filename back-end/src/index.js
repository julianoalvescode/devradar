const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://juliano:@senhaforte@omnistack-hnoqu.mongodb.net/devradar?retryWrites=true&w=majority', { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json())
app.use(routes)

// Métodos HTTP: get, post, put, delete
// Query params: req.query (Filtros, ordenação, paginação)
// Router Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)


app.listen(3333);