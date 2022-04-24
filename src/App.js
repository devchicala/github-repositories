import "./styles/global.css";

import Routers from "./routes";
import { AuthProvider } from "./context/auth";

function App() {

  return (
    <div>
      <AuthProvider>
          <Routers />
      </AuthProvider>
    </div>
  );
}

export default App;
