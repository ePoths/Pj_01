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

    // 함수명 잘봐라
    setToDo("");
  };
  console.log(toDos);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {/* array 갯수  */}
        <h1>My To Dos ({toDos.length})</h1>
        <input
          // value 변경 감지
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <br></br>
        {/* btn margin때문에 div테그 */}
        <div className="ToDoBtn">
          <button>Add To Do</button>
        </div>
        <button onClick={onClick}>ToDo all delete❌</button>
      </form>
      <hr></hr>
      <ul>
        {/* array에 있는거 추가 */}
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
