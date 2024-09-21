import css from './ContactList.module.css';
import Contact from './Contact/Contact';

const ContactList = ({ contacts, filter }) => {
  filter = filter.toLowerCase().trim();

  return (
    <ul className={css.contactList}>
      {contacts
        .filter(
          contact =>
            contact.name.toLowerCase().includes(filter) ||
            contact.number.toLowerCase().includes(filter)
        )
        .map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            key={contact.id}
          />
        ))}
    </ul>
  );
};
export default ContactList;
