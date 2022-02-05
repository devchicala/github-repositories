import "./styles/global.css";
import { Provider } from "react-redux";

import store from "./store";
import Routers from "./routes";
import { AuthProvider } from "./context/auth";

function App() {

  return (
    <div className="App">
      <AuthProvider>
          <Routers />
      </AuthProvider>
    </div>
  );
}

export default App;
