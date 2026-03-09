

const Image = ({imgSrc , className}) => {
    return (
        <img className={`${className} w-fit`} src={imgSrc} alt="" />
    )
}

export default Image