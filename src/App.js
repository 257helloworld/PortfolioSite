import logo from "./logo.svg";
import "./App.css";
import Profile from "./Components/Profile";
import Content from "./Components/Content";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>

    <div className="App">
      <div className="section">
        <Profile />
        <Content />
      </div>
    </div>
    </StrictMode>
  );
}

export default App;
