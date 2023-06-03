const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let todoList = [];

app.get('/', (req, res) => {
  res.render('index', { todoList: todoList });
});

app.post('/add', (req, res) => {
  const newTask = req.body.newTask;
  todoList.push(newTask);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const taskIndex = req.body.taskIndex;
  todoList.splice(taskIndex, 1);
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
