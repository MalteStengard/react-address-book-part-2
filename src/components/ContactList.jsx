import ContactItem from "./ContactItem";
import { Context } from "../App";
import { useContext } from "react";

export default function ContactList() {
  console.log("contact list hit");

  const { contactList } = useContext(Context);

  return (
    <ul>
      {contactList.map((contactItem, i) => (
        <ContactItem contactItem={contactItem} key={i} />
      ))}
    </ul>
  );
}
