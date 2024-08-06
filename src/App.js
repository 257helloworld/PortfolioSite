import logo from "./logo.svg";
import "./App.css";
import Profile from "./Components/Profile";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <div className="section">
        <Profile />
        <Content />
      </div>
    </div>
  );
}

export default App;
