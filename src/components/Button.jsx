

const Button = ({btnText , className , onClick}) => {
    return (
        <button className={`cursor-pointer duration-500 ${className}`} onClick={onClick}>{btnText}</button>
    )
}

export default Button