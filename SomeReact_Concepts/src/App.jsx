import { useState } from 'react'
import './App.css'

export default function App() {
  const [todo, setToDo] = useState([
    { id: 1, title: "Go to Gym", description: "Go to gym" },
    { id: 2, title: "Go to Kulcha land", description: "Go to Kulcha Land" },
    { id: 3, title: "Go to Darshan", description: "Go to Darshan" }
  ]);

  return (  // this same spread operator thing we can done by using the Push method
    <>
      <button onClick={() => { setToDo([...todo, { id: 4, title: "Added Random To Do", description: "Added Random Description" }]) }}>Add a new To Do</button>
      {todo.map(async (x) => <ToDo title={x.title} description={x.description}></ToDo>)}
    </>
  )
}

const ToDo = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  )
}








//#region :- This region used for 1st and 2nd re-render point
// function App() {
//   const [title, setTitle] = useState("Naman");
//   return (
//     <>
//       <button onClick={() => { setTitle(Math.random()) }}>Click me</button>
//       <Header title={`My name is ${title}`}></Header>
//       <Header title="My name is Naman"></Header>
//     </>
//   )
// }

// function CustomHeader() {                 // to minimize the re-rendering in React 
//   const [title, setTitle] = useState("Naman");
//   return (
//     <>
//       <button onClick={() => { setTitle(Math.random()) }}>Click me</button>
//       <Header title={`My name is ${title}`}></Header>
//     </>
//   )
// }

// const Header = memo(function Header({ title }) {          // 
//   return (
//     <>
//       <h1>{title}</h1>
//     </>
//   )
// })
//#endregion

// why functions / componets in react returns only single div
// ==> The main reason behind this was -- It makes easy to do RECONCILIATION ( process of figuring out that what and when DOM updates need to happen as application grows )

// Re rendering in react
// It happens when -- A state variable that is being used inside a component changes then re-rendering happens
//                 -- A parent component re-render triggers all children components re-rendering
// So to minimize the re-renders we can move the state variable to below of that component in which we use the State.
// Apart from this, we also have one more option in which we can use the Memo hook which will only re-render the component is if props changes

// KEY concept of React