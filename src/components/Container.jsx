

const Container = ({children , className}) => {
    return (
        <div className={`lg:w-352.5 w-[300px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container