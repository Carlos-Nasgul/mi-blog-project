import Header from "./components/Header";
import Body from "./components/Body";
import { WindowOne, WindowTwo } from "./components/Windows";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <WindowOne />
        <WindowTwo />
      </Body>
      <Footer email="carlosgarciarico1974@gmail.com" />
    </div>
  );
}

export default App;
