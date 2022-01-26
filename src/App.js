import "./styles/global.css";
import { Provider } from "react-redux";

import store from "./store";
import Routers from "./routes";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
          <Routers />
      </Provider>
    </div>
  );
}

export default App;
