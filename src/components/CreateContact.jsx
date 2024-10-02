import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Context } from "../App";

export default function CreateForm() {

    const { contacts, setContacts } = useContext(Context)


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
      });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target);
//     const [firstName, lastName, street, city] = event.target;
//     console.log(firstName, lastName, street, city);


//     setFirstName(firstName)
//     setLastName(lastName)
//     setStreet(street)
//     setCity(city)

//   }

  const handleSubmit = (event) => {
    event.preventDefault();
    setContacts([...contacts, formData]); // Save formData to context
    // navigate('/contacts'); // Redirect to contacts page or any other page
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Firstname</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName">Lastname</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={formData.street}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={formData.city}
      />
      <button type="submit">Create</button>
    </form>
  );
}
