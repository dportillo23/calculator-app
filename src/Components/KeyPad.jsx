function KeyPad(props) {
    function addNumber (e) {
        props.click(e.target.name)
        console.log(e.target);
    }

    function clear() {
        props.clear()
    }

    function solve() {
        props.equal()
    }

    function deleteSpace() {
        props.deleteBack()
    }

    function operation(e) {
        props.operator(e.target.name)
    }

    return (
        <div className="key--pad">
          <button name="7" className="btn--main small" onClick={addNumber}>7</button>
          <button name="8" className="btn--main small" onClick={addNumber}>8</button>
          <button name="9" className="btn--main small" onClick={addNumber}>9</button>
          <button name="DEL" className="btn--dark small" onClick={deleteSpace}>DEL</button>
          <button name="4" className="btn--main small" onClick={addNumber}>4</button>
          <button name="5" className="btn--main small" onClick={addNumber}>5</button>
          <button name="6" className="btn--main small" onClick={addNumber}>6</button>
          <button name="+" className="btn--main small" onClick={operation}>+</button>
          <button name="1" className="btn--main small" onClick={addNumber}>1</button>
          <button name="2" className="btn--main small" onClick={addNumber}>2</button>
          <button name="3" className="btn--main small" onClick={addNumber}>3</button>
          <button name="-" className="btn--main small" onClick={operation}>&ndash;</button>
          <button name="." className="btn--main small" onClick={addNumber}>.</button>
          <button name="0" className="btn--main small" onClick={addNumber}>0</button>
          <button name="/" className="btn--main small" onClick={operation}>&divide;</button>
          <button name="*" className="btn--main small" onClick={operation}>&times;</button>
          <button name="RESET" className="btn--dark large" onClick={clear}>RESET</button>
          <button name="equal" className="btn--equal large" onClick={solve}>=</button>
        </div>
    )
}

export default KeyPad;