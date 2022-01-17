import "./styles/global.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import store from "./store";
import Principal from "./components/Principal";
import EpisodioDetails from './components/EpisidioDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/details" element={<EpisodioDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
