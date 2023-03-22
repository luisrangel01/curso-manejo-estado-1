import "./App.css";
import { UseState } from "./UseState.js";
import { UseReducer } from "./UseReducer";
import { ClassState } from "./ClassState.js";

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <hr />
      <UseReducer name="Use Reducer" />
      {/* <ClassState name="Class State" /> */}
    </div>
  );
}

export default App;
