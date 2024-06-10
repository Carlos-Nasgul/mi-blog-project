import Header from "./components/Header";
import Body from "./components/Body";
import { WindowOne, WindowTwo } from "./components/Windows";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <WindowOne />
        <WindowTwo />
      </Body>
    </div>
  );
}

export default App;
