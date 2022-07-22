const express = require('express');

const app = express();
const port = process.env.PORT;


app.get('/', (_req, res) => {
  res.send('Hello Back End');
})

app.listen(port, () => console.log(`Rodando na porta ${port}!`))