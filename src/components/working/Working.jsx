
const Working = ({ todos, setTodos }) => {
    const delBtn = (id) => {
        const rfTodos = todos.filter(el => el.id != id)
        setTodos(rfTodos);
    }
    
    const chgBtn = (todo) => {
        todo.isDone = !todo.isDone
        todos = todos.filter(el => el != todo)
        setTodos([...todos, todo])
    }

    return (
        <div>
        <h2>WORKING</h2>
        {todos.map(todo => {
        if(!todo.isDone)
        return(
            <div key={todo.id}>
            {todo.title} : {todo.contents}
            <button onClick={()=>delBtn(todo.id)}>del</button>
            <button onClick={()=>chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'}</button>
            </div>
        )
        })}
    </div>
    )
}

const Done = ({ todos, setTodos }) => {
    const delBtn = (id) => {
        const rfTodos = todos.filter(el => el.id != id)
        setTodos(rfTodos);
        }
    
    const chgBtn = (todo) => {
        todo.isDone = !todo.isDone
        todos = todos.filter(el => el != todo)
        setTodos([...todos, todo])
        }
    
    return (
        <div>
        <h2>DONE</h2>
        {todos.map(todo => {
            if(todo.isDone)
            return(
            <div key={todo.id}>
                {todo.title} : {todo.contents}
                <button onClick={()=>delBtn(todo.id)}>del</button>
                <button onClick={()=>chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'}</button>
            </div>
            )
        })}
        </div>
    )
}

export { Working, Done }

// export default BigWorking



// const Done = ({ todos, delBtn, chgBtn }) => {

//     return (
//         <div>
//         <h2>DONE</h2>
//         {todos.map(todo => {
//           if(todo.isDone)
//           return(
//             <div key={todo.id}>
//               {todo.title} : {todo.contents}
//               <button onClick={()=>delBtn(todo.id)}>del</button>
//               <button onClick={()=>chgBtn(todo)}>com</button>
//             </div>
//           )
//         })}
//       </div>
//     )
// }
