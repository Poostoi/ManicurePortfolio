import "./App.css";
import { Col, Row } from "react-bootstrap";
import { Header } from "./Header";
import { Main } from "./Main";

function App() {
  return (
    <>
      <Header />

      <img
        className="img"
        src="https://static1.bigstockphoto.com/4/4/8/large1500/84419060.jpg"
        alt="Flowers in Chania"
      />

      <Main />
    </>
  );
}

export default App;
