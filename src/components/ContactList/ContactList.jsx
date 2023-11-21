import React, { useEffect } from 'react';
import {
  List,
  ContactItem,
  CardWrapper,
  ButtonDelete,
  Info,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  getContacts,
} from '../../redux/contacts/phoneBookSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <CardWrapper>
            <Info>{name}</Info>
            <Info>{number}</Info>
            <ButtonDelete onClick={() => handleDeleteContact(id)}>
              Delete
            </ButtonDelete>
          </CardWrapper>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
