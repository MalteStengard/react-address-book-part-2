import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../App'; // Adjust the import based on your context location

export default function ContactDetail() {
  const { id } = useParams();
  const { contacts } = useContext(Context);
  const contact = contacts.find(contact => contact.id === parseInt(id));

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>
  );
}
