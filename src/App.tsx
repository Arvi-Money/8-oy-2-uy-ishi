import './App.css'
import trash from './images/trash.svg'
import { SyntheticEvent, useState } from 'react'
import { inputT, todosT, deleteTodoT } from './Types'


function App() {
  const [input, setInput] = useState<inputT>('');
  const [todos, setTodos] = useState<todosT>([]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setTodos((prev) => [...prev, input]);
    setInput("");
  }

const handleDelete: deleteTodoT = (el) => {
  setTodos([...todos.filter((item) => item !== el)]);
}

  return (
    <>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Add a new task' value={input} onChange={(e) => {setInput(String(e.target.value))}}/>
          <button className="btn" type='submit' onClick={handleSubmit}>+</button>
        </form>
        <div className="todo">
          <div className="tasks">
            {
              todos.length ? (
                todos.map((el, index) => {
                  return (
                    <div className="task" key={index}>
                      <h2>{el}</h2>
                      <img src={trash} alt="" onClick={() => handleDelete(el)}/>
                    </div>
                );
                })
              ): (
                <div>No todos...</div>
              )
            }
          </div>
        </div>

      </div>
    </>
          )
}


export default App