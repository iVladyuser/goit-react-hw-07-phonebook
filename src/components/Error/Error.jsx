import { useSelector } from 'react-redux';
import { WrapperError } from './Error.styled';
import { selectContactsError } from 'redux/contacts/contactsSelectors';

export const Error = () => {
  const error = useSelector(selectContactsError);

  return (
    <WrapperError>
      <p>We're sorry, {error}</p>
    </WrapperError>
  );
};
