import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <p className={css.contactText}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.contactListBtn}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
