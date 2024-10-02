import { useEffect, useState, createContext } from "react";
import './App.css';
import ContactList from "./components/ContactList";
import Dashboard from "./components/Dashboard";

const Context = createContext();


function App() {
    const [contacts, setContacts] = useState([]);

    return (
        <Context.Provider   value={{contacts}}     >
          <div className="container">
            <p>HEllo</p>
            <Dashboard />
            <CreateForm />
          </div>
        </Context.Provider>
      );
}

export { App, Context };
