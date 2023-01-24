import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.filter;
const getContacts = state => state.contacts.items;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
