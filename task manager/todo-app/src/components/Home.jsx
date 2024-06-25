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
    task: "",
    id: "",
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
    <section className="bg-primary min-h-screen ">
      <div className="container max-w-6xl  mx-auto px-6 py-20 flex flex-col items-center">
        <h2 className="text-center text-9xl text-white font-bowby tracking-tighter">
          Task Manager
        </h2>
        <div className="max-w-6xl bg-white border rounded-md px-36 py-10 mt-10 min-h-[45dvh]">
          <Create editTask={editTask} />

          {todos.length === 0 ? (
            <div>
              <h2 className="mt-20 text-5xl text-center">No todo.... 😥</h2>
            </div>
          ) : (
            todos.map((todo) => (
              <div className="flex border-b-4 border-primary pb-2 w-full my-6 items-center justify-between text-xl uppercase">
                <div className="checkbox flex gap-3 items-center">
                  {todo.done ? (
                    <BsFillCheckCircleFill
                      className=" text-primary"
                      onClick={() => handleDone(todo._id)}
                    />
                  ) : (
                    <BsCircleFill
                      className="text-primary rounded-full"
                      onClick={() => handleDone(todo._id)}
                    />
                  )}
                  <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                </div>
                <div className="flex gap-10 ">
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
      </div>
    </section>
  );
};

export default Home;
