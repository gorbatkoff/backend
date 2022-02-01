import express from "express";

const PORT = 4001;
const app = express();


app.use(express.json());

let todos = [
{
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  name: "Drink tea",
  done: true,
  createdAt: "2022-02-01T08:24:00.849Z",
  updatedAt: "2022-02-01T08:24:00.849Z"
},

{
    id: "5fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Do homework",
    done: false,
    createdAt: "2022-02-01T08:24:00.849Z",
    updatedAt: "2022-02-01T08:24:00.849Z"
},

{
    id: "4az85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Clean all room",
    done: false,
    createdAt: "2022-02-01T08:24:00.849Z",
},
];


app.get('/todos', (req, res) => {
    res.send(todos);
})

app.get('/todos/:id', (req, res) => {
    let todo = todos.find((todo  ) => {
        return todo.id === +req.params.id;
    })
    res.send(artist);
})


app.post('/todos', (req, res) => {
    const todo = {
        id: Date.now(),
        name: req.body.name,
        done: req.body.done
    };
    todos.push(todo);
    res.send(todo);
});


app.put('/todos/:id', (req, res) => { // changing something from array
    let todos = todos.find((todo) => {
        return todo.id === +req.params.id;
    });
    todos.name = req.body.name;
    res.sendStatus(200);
});


app.delete('/todos/:id', (req, res) => { // Deleting something from array of tasks or smth else
    todos = todos.filter((todo) => {
        return todo.id !== +req.params.id;
    })
    res.sendStatus(200);
})

// 
app.listen(PORT, () => console.log(`Server is listening on ${PORT} port`));
