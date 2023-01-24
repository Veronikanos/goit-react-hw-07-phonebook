import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContactThunk,
  getContactsThunk,
} from 'redux/operations/contactsThunk';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
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
