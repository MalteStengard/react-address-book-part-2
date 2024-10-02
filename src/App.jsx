import { useEffect, useState, createContext } from "react";
import './App.css';
import ContactList from "./components/ContactList";
import Dashboard from "./components/Dashboard";
import CreateForm from "./components/CreateContact";

const Context = createContext();


function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/MalteStengard/contact");
            const data = await response.json();
            setContacts(data);
          } catch (error) {
            console.error("Error fetching contacts:", error);
          }
        };
      
        fetchContacts();
      }, []);

      //fix routes bruh
    return (
        <Context.Provider   value={{contacts, setContacts}}     >
          <div className="container">
            <p>HEllo</p>
            <Dashboard />
            <CreateForm />
          </div>
        </Context.Provider>
      );
}

export { App, Context };
