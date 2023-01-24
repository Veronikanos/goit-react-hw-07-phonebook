import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/operations/contactsThunk';
import { selectContacts } from 'redux/selectors/selectors';
import styles from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const users = useSelector(selectContacts);

  return (
    <section className={styles.phonebook}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
        {/* {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : ( */}
        <>
          <h3>Your phonebook has {users.length} contacts</h3>
          <Filter />
          <ContactList />
        </>
        {/* )} */}
      </div>
    </section>
  );
};
