

const Container = ({children , className}) => {
    return (
        <div className={`lg:w-352.5 px-3 lg:px-0 mx-auto ${className}`}>{children}</div>
    )
}

export default Container