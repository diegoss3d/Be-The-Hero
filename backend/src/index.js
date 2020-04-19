const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()) /*Informa para express ir no corpo da requisição e converter o objeto json
em um objeto javascript*/

app.use(routes)

app.listen(3333);

/*Executar servidor com node index.js*/
/* "npm install nodemon -D" para instalar o nodemon, após isso o servidor inicia com "npm start"*/