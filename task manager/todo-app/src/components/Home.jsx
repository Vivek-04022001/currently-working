import Create from "./Create";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState({
    task: '',
    id: '',
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDone = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    window.location.reload();
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    window.location.reload();
  };

  const handleEdit = (todo) => {
    setEditTask((prevEditTask) => ({
      ...prevEditTask,
      task: todo.task,
      id: todo._id,
    }));
  };

  return (
    <div className="home">
      <h2>Task Manager</h2>
      <Create editTask={editTask} />

      {todos.length === 0 ? (
        <div>
          <h2>No todo</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task">
            <div className="checkbox">
              {todo.done ? (
                <BsFillCheckCircleFill
                  className="icon"
                  onClick={() => handleDone(todo._id)}
                />
              ) : (
                <BsCircleFill
                  className="icon"
                  onClick={() => handleDone(todo._id)}
                />
              )}
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => {
                    handleDelete(todo._id);
                  }}
                />
              </span>
              <span>
                <CiEdit
                  className="icon"
                  onClick={() => {
                    handleEdit(todo);
                  }}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
