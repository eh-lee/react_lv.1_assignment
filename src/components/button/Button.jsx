const Button = ({addBtnHandler, children}) => {
    return <button onClick={addBtnHandler}>{children}</button>
}

export default Button