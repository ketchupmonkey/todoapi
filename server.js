var express= require('express');
var bodyParser=require('body-parser');

var app = express();
var PORT =process.env.PORT || 3000;
var todos=[];
var todoNextId=1;

app.use(bodyParser.json());

app.get('/',function(req,res){
  res.send('Todo API Root');
});

//GET /todos
app.get('/todos',function(req,res){
  res.json(todos);
});
//GET /todos/{:id}

app.get('/todos/:id',function(req,res){
  var todoId = parseInt(req.params.id,10);
  var matchedTodo;

  todos.forEach(function(todos){
      if (todoId === todos.id){
          matchedTodo = todos;
      }

  });
  if (matchedTodo){
    res.json(matchedTodo);
  }else{
    res.status(404).send();
  }

  res.send('Asking for todo with id of '+  req.params.id + todos[req.params.id]);
});

//POST /todos

app.post('/todos',function(req,res){
  var body = req.body;
  // add id field
  //push body into array
  body.id=todoNextId;
  todoNextId ++;
  //console.log('description: ' + body.description);
  todos.push(body);
  //console.log(todos);
  //console.log(todoNextId);
  res.json(body);
});

app.listen(PORT,function(){
  console.log('Express listening on port ' + PORT + '!');
})
