import { ContactForm, ContactList, Filter } from 'components';
import { Loader } from '../components/Loader/Loader';
import { Error } from '../components/Error/Error';
import { useSelector } from 'react-redux';
import {
  getError,
  getIsLoading,
  getPhoneBookValue,
} from '../redux/contacts/phoneBookSlice';
const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const phoneBook = useSelector(getPhoneBookValue);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        margin: '0 auto',
        padding: '30px',
      }}
    >
      <h1 style={{ color: '#3645ab' }}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {phoneBook.length === 0 && !error && !isLoading ? (
        "You don't have any contacts yet"
      ) : (
        <Filter />
      )}
      {error ? <Error /> : <ContactList />}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
