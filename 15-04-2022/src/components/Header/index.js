import "./styles.css";

export const Header = ({ title, setCurrentPage }) => (
  <div className="header">
    <p>{title}</p>
    <button onClick={() => setCurrentPage("Home")}>Home</button>
    <button onClick={() => setCurrentPage("About")}>About</button>
    <button onClick={() => setCurrentPage("Contacts")}>Contacts</button>
  </div>
);
