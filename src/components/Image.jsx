

const Images = ({imgSrc , className}) => {
    return (
        <img className={`${className} w-fit`} src={imgSrc} alt="" />
    )
}

export default Images