
function Button (props) {
    function handleClick(e) {
        console.log(e.target)
    }

    return (
        <button title={props.type} className={props.class} onClick={handleClick}>{props.button}</button>

    )
}

export default Button;