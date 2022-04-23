import "./styles/global.css";

import Routers from "./routes";
import { AuthProvider } from "./context/auth";

function App() {

  return (
    <div className="App p-5">
      <AuthProvider>
          <Routers />
      </AuthProvider>
    </div>
  );
}

export default App;
