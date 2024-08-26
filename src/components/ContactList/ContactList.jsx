import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      <li className={css.item}>
        {filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default ContactList;
