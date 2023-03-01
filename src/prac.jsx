import React, {useState}  from 'react'

const App = () => {
  const INITIAL_STATE = [
    {
      id: 1, title: 'title1', contents: '11', isDone: false,
    },
    {
      id: 2, title: 'title2', contents: '22', isDone: false,
    },
  ];

  let [todos, setTodos] = useState(INITIAL_STATE);

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const titleHandler = (title) => {
    setTitle(title.target.value)
  };
  const contentsHandler = (contents) => {
    setContents(contents.target.value)
  };
  const addBtnHandler = () => {
    const newTodo = {
      id: todos.length +1,
      title,
      contents,
      isDone: false,
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setContents('')
  };

  const chgBtn = (todo) => {
    todo.isDone = !todo.isDone;
    todos = todos.filter(el => el !== todo);
    setTodos([...todos, todo]);
  }
  const delBtn = (id) => {
    const newTodos = todos.filter(el => el.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <div>
        <h1>TO DO LIST</h1>
      </div>

      <div>
        &nbsp;title :&nbsp;<input type='text' value={title} onChange={titleHandler}/>
        &nbsp;contents :&nbsp;<input type='text' value={contents} onChange={contentsHandler}/>
        <button onClick={addBtnHandler}>ADD</button>
      </div>

      <div>
      <h2>WORKING</h2>
       {todos.map(todo => {
          if (!todo.isDone)
          return(
            <div key={todo.id}>
              {todo.title} : {todo.contents}
              <button onClick={()=>delBtn(todo.id)}>del</button>
              <button onClick={()=>chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'} </button>
            </div>
          )
        })}
      </div>

      <div>
      <h2>DONE</h2>
      {todos.map(todo => {
          if (todo.isDone)
          return(
            <div key={todo.id}>
              {todo.title} : {todo.contents}
              <button onClick={()=>delBtn(todo.id)}>del</button>
              <button onClick={()=>chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'} </button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
