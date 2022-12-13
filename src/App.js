import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onClick = () => setToDos([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //stop
    }
    // Push랑 같은 개념
    setToDos((currentArray) => [toDo, ...currentArray]); //매우매우 중요@@@@@@@

    // 다른거임
    setToDo("");
  };
  console.log(toDos);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>My To Dos ({toDos.length})</h1>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <br></br>
        <div className="ToDoBtn">
          <button>Add To Do</button>
        </div>
        <button onClick={onClick}>ToDo all delete❌</button>
      </form>
    </div>
  );
}

export default App;
