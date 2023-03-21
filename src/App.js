import "./App.css";
import { UseState } from "./UseState.js";
import { ClassState } from "./ClassState.js";

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <hr />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
