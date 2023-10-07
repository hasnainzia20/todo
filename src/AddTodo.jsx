import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
    // console.log(todo, 'todo');
  };

  return (
    <div>
      <input type="text" id="todoValue" value={todo} />
      <button onClick={handleChange}>add</button>
    </div>
  );
};

export default AddTodo;
