import "./styles.css";
import Input, { inputMail, mailError } from "./inputComponent";

export default function App() {
  function clickHandler() {
    console.log(inputMail.value);
  }
  return (
    <div className="App">
      <Input />
      <button onClick={clickHandler} type="button">
        Submit
      </button>
      <p className="para"></p>
    </div>
  );
}
