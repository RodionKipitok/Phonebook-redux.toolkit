import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'Contact/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('Contact/deleteContact', taskId => {
  return {
    payload: taskId,
  };
});

export const filterContact = createAction('Contact/filterContact', value => {
  return {
    payload: value,
  };
});
