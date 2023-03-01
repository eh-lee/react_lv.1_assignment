import "./button.css"

const Button = ({addBtnHandler, children}) => {
    return <button className="add-button" onClick={addBtnHandler}>{children}</button>
}

export default Button