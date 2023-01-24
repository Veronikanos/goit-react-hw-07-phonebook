import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations/contactsThunk';
import { getFilteredContacts } from 'redux/selectors/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  return (
    <>
      <ul>
        {contacts.map(item => (
          <li key={item.id} className={styles.contactUser}>
            <p className={styles.user}>
              <b>{item.name}</b>
            </p>
            <span>{item.number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
