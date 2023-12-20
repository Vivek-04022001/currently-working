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
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task..."
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button
        type="button"
        onClick={(e) => {
          handleButton(e);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Create;
