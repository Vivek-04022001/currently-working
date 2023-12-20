const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");

const app = express();

app.use(cors());
app.use(express.json());

// mongoose database
mongoose.connect("mongodb://127.0.0.1:27017/test");

// add
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// get
app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// put
app.put("/update/:id", (req, res) => {
  const { id } = req.params;

  TodoModel.findById(id)
    .then((todo) => {
      if (!todo) {
        return res.state(404).json({ error: "Todo not found!" });
      }

      // Toggle the 'done' property
      todo.done = !todo.done;
      // save the updated document
      return todo.save();
    })
    .then((updatedTodo) => {
      res.json(updatedTodo);
    })
    .catch((error) => {
      res.state(500).json({ error: "Internal Server Error" });
    });
});

// delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

// updateTask
app.put("/updateTask/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    // Find the Todo document by ID
    const todo = await TodoModel.findById(taskId);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found!" });
    }

    // Update the 'task' property with the new value from the request body
    todo.task = req.body.task;

    // Save the updated document
    const updatedTodo = await todo.save();

    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(3001, () => {
  console.log("Server is running....");
});
