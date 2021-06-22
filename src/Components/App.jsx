import Button from "./Button";
import Screen from "./Screen"
import TitleBox from "./TitleBox";
import "../Styles/style.css";
import buttonList from "../keypad";


function App() {

  return (
    <header className="header">
      <div className="container">
        <TitleBox />
        <Screen display="" />
        <div className="key--pad">
          {buttonList.map(button => (
            <Button
              key={button.key}
              button={button.key}
              class={button.class} />
          ))}
        </div>
      </div>
    </header>
  );
}

export default App;
