import React, {useState} from 'react'
import Form from './components/form/form';
import Header from './components/header/Header';
import { Working, Done } from './components/working/Working';

const App = () => {
  const INITIAL_STATE = [
    {
      id: 1, title: 'title1', contents: 'contents1', isDone: false,
    },
    {
      id: 2, title: 'title2', contents: 'contents2', isDone: false,
    },
    {
      id: 3, title: 'title3', contents: 'contents3', isDone: false,
    },
  ]
  
  let [todos, setTodos] = useState(INITIAL_STATE);

  return (
    <div>
      <Header/>
      <Form todos={todos} setTodos={setTodos}/>
      <Working todos={todos} setTodos={setTodos}/>
      <Done todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App




















// --

// const App = () => {
//   const INITIAL_STATE = [
//     {
//       id: 1, title: 'title1', contents: 'contents1', isDone: false,
//     },
//     {
//       id: 2, title: 'title2', contents: 'contents2', isDone: false,
//     },
//     {
//       id: 3, title: 'title3', contents: 'contents3', isDone: false,
//     },
//   ]
  
//   let [todos, setTodos] = useState(INITIAL_STATE);
    
//   const [title, setTitle] = useState('')
//   const [contents, setContents] = useState('')

//   const titleHandler = (title) => {
//     setTitle(title.target.value);
//   }
//   const contentsHandler = (contents) => {
//     setContents(contents.target.value);
//   }
//   const addBtnHandler = () => {
//     const newTodo = {
//       id: todos.length+1,
//       title,
//       contents,
//       isDone: false,
//     }
//     setTodos([...todos, newTodo]);
//     setTitle('')
//     setContents('')
//   }

//   const delBtn = (id) => {
//     const rfTodos = todos.filter(el => el.id != id)
//     setTodos(rfTodos);
//   }

//   const chgBtn = (todo) => {
//     todo.isDone = !todo.isDone
//     todos = todos.filter(el => el != todo)
//     setTodos([...todos, todo])
//   }

//   return (
//     <div>
//       <Header/>
//       <Form title={title} contents={contents} titleHandler={titleHandler} contentsHandler={contentsHandler} addBtnHandler={addBtnHandler}/>

//       {/* <div>
//         title :&nbsp;<input type='text' value ={title} onChange={titleHandler}/>
//         contents :&nbsp;<input type='text' value ={contents} onChange={contentsHandler}/>
//         <Button addBtnHandler={addBtnHandler}>ADD</Button>
//       </div> */}

//       <Working todos={todos} delBtn={delBtn} chgBtn={chgBtn}/>
//       {/* <div>
//         <h2>WORKING</h2>
//         {todos.map(todo => {
//           if(!todo.isDone)
//           return(
//             <div key={todo.id}>
//               {todo.title} : {todo.contents}
//               <button onClick={()=>delBtn(todo.id)}>del</button>
//               <button onClick={()=>chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'}</button>
//             </div>
//           )
//         })}
//       </div> */}

//       <Done todos={todos} delBtn={delBtn} chgBtn={chgBtn}/>
//       {/* <div>
//         <h2>DONE</h2>
//         {todos.map(todo => {
//           if (todo.isDone)
//           return (
//             <div key={todo.id}>
//               {todo.title} : {todo.contents}
//               <button onClick={()=>delBtn(todo.id)}>del</button>
//               <button onClick={()=>chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'}</button>
//             </div>
//           )
//         })}
//       </div> */}
//     </div>
//   )
// }

// export default App
