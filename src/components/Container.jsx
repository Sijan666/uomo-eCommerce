

const Container = ({children , className}) => {
    return (
        <div className={`lg:w-330 w-[300px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container