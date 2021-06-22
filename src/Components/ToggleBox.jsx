import Toggle from "./Toggle";


function ToggleBox() {
return (
    <div className="toggle--box">
        <div className="toggle--num--box">
        <span className="toggle--num" id="1">1</span>
        <span className="toggle--num" id="2">2</span>
        <span className="toggle--num" id="3">3</span>
        </div>
        <h4 className="theme">Theme</h4>
        <Toggle/>

    </div>
)
}

export default ToggleBox;