import Button from "../button/Button"
import React, {useState} from 'react'
import './form.css'

const Form = ({ todos, setTodos }) => {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const titleHandler = (title) => {
        setTitle(title.target.value);
    }
    const contentsHandler = (contents) => {
        setContents(contents.target.value);
    }
    const addBtnHandler = () => {
        const newTodo = {
          id: todos.length+1,
          title,
          contents,
          isDone: false,
        }
        setTodos([...todos, newTodo]);
        setTitle('')
        setContents('')
    }

    return (
    <div className="add-form">
        <div className="input-group">
            <label className="form-label">title :&nbsp;</label>
            <input className="add-input" type='text' value ={title} onChange={titleHandler}/>
            <label className="form-label">contents :&nbsp;</label>
            <input className="add-input" type='text' value ={contents} onChange={contentsHandler}/>
            <Button addBtnHandler={addBtnHandler}>ADD</Button>
        </div>
    </div>
    )
}

export default Form