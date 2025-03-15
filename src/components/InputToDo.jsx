import React, { useState } from "react";

function InputToDo({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className="input-todo">
      <input
        type="text"
        value={taskText}
        placeholder="Тапсырма қосу..."
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Қосу</button>
    </div>
  );
}

export default InputToDo;
  