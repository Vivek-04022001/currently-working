import { useEffect, useState } from "react";
import axios from "axios";
const Create = ({ editTask }) => {
  const [buttonText, setButtonText] = useState("Add");
  const [task, setTask] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    if (
      editTask.task !== undefined &&
      editTask.task !== "" &&
      editTask.id.length > 0
    ) {
      const { task: edit, id } = editTask;
      setTask(edit);
      setButtonText("Edit");
      setId(id);
    } else {
      setButtonText("Add");
    }
  }, [editTask]);

  useEffect(() => {
    if (task === "") setButtonText("Add");
  }, [task]);

  const handleButton = (e) => {
    if (buttonText === "Add") {
      axios
        .post("http://localhost:3001/add", { task: task })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    } else if (buttonText === "Edit") {
      updateTask(task, id);
    }

    window.location.reload();
  };

  const updateTask = (updatedTask, taskId) => {
    axios
      .put(`http://localhost:3001/updateTask/${taskId}`, { task: updatedTask })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-primary h-20 rounded-full  overflow-hidden flex items-center text-xl">
      <input
        type="text"
        placeholder="Enter Task..."
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
        className="border-none bg-primary text-white outline-none flex-1 h-full  px-10 placeholder:text-white "
      />
      <button
        type="button"
        onClick={(e) => {
          handleButton(e);
        }}
        className=" px-6 rounded-tr-full rounded-br-full h-full bg-black text-white  font-bold"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Create;
