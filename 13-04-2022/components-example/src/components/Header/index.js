import { NavBar } from "../NavBar";
import logo from "../../logo.svg";

export const Header = () => (
  <header className="App-header">
    <NavBar> </NavBar>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);
