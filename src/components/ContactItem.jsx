import { Context } from "../App";
import { useContext } from "react";

export default function ContactItem({
    contactItem: { id, firstName, lastName, street, city }
}) {
    return (
        <li>
        <article className="name">
          <h3>{firstName} {lastName}</h3>
          <p>
            <span className="street">{street}</span>
          </p>
          <p>
          <span className="city">{city}</span>
          </p>
        </article>
      </li>
    );
}