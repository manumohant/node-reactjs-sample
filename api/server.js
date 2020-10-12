const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [{userName:'manu',name:'manu name'}];
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  next();
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  console.log('api/user called!!!!')
  const user = req.body;
  console.log(user);
  users.push(user);
  res.json(user);
});

app.get('/', (req,res) => {
    res.send('Sorry darling. You do not have permission to view this resource');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});