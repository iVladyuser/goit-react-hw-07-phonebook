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
import { selectFilteredContacts } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactItem key={id}>
          <CardWrapper>
            <Info>{name}</Info>
            <Info>{phone}</Info>
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
