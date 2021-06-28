function Toggle() {
    const body = document.body;

    var pageState = localStorage.getItem("pageState")
    if (pageState === null) {
        body.className = "Theme-1"
    } else {
        body.className = pageState
    }


    const changeTheme = (e) => {
        body.className = e.target.value
    }

    const savePageState = (e) => {
        pageState =  e.target.value
        console.log("This is the theme saved " + e.target.value);
        localStorage.setItem("pageState", pageState)
        console.log("This is the updated pageState" + pageState);
    }

    const onChangeFunc = (e) => {
        changeTheme(e);
        savePageState(e);
    }

    return (
        <div className="radio-wrapper">
            <input type="radio" defaultChecked={pageState === "Theme-1" ? true : false} name="theme" value="Theme-1" className="theme-1" id="radio-1" onChange={onChangeFunc} />
            <label for="radio-1">1</label>

            <input type="radio" defaultChecked={pageState === "Theme-2" ? true : false} name="theme" value="Theme-2" className="theme-2" id="radio-2" onChange={onChangeFunc} />
            <label for="radio-2">2</label>

            <input type="radio" defaultChecked={pageState === "Theme-3" ? true : false} name="theme" value="Theme-3" className="theme-3" id="radio-3" onChange={onChangeFunc} />
            <label for="radio-3">3</label>

            <div className="selector">&nbsp;</div>

        </div>)
}

export default Toggle;