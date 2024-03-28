import { PhonebookForm } from './Phonebook/Form/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';

export default function App(params) {
  return (
    <>
      <PhonebookForm />
      <Filter />
      <Contacts />
    </>
  );
}
