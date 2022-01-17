import "./styles/global.css";
import { Provider } from "react-redux";

import Principal from "./components/Principal";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Principal />
      </Provider>
    </div>
  );
}

export default App;
