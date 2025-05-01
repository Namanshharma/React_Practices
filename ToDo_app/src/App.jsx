import { useState } from 'react'
import './App.css'

function App() {
  const [toDos, setToDos] = useState([
    { title: "DSA", Description: "Every day for 2 hours", Completed: "Mark as Done" },
    { title: "React", Description: "Every day for 1 hour", Completed: "Mark as Done" }
  ]);

  const createToDo = () => {
    setToDos([...toDos, { title: "Node", Description: `Every day for ${Math.random() * 10} mins` }])
  }

  return (
    <div>

      <button onClick={createToDo}>Add a Random To Do</button>
      {toDos.map((x) => {
        return <CustomToDO title={x.title} Description={x.Description} ></CustomToDO>
      })}

    </div >
  )
}

function CustomToDO(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h4>{props.Description}</h4>
    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}> count is {count} </button>
//     </>
//   )
// }
// function App() {
//   const [count, setCounter] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCounter}></CustomButton>
//     </div>
//   )
// }

// function CustomButton({ count, setCount }) {
//   const customCounterHandler = () => {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={customCounterHandler}>Counter {count}</button>
//     </div>
//   )
// }

export default App