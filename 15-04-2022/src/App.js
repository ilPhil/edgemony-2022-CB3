import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";

import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="App">
      <Header title="Hello" setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <Home />}
      {currentPage === "About" && <About />}
      {currentPage === "Contacts" ? <Contacts /> : null}
    </div>
  );
}

export default App;
