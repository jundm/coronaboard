const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // 익스프레스 인스턴스 생성

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({message: 'Hello CoronaBoard!'})
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on prot ${port}`)
})

