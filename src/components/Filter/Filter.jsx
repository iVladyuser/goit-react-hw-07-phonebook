import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from '../../redux/contacts/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';
import { selectContactsFilterTerm } from 'redux/contacts/contactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(selectContactsFilterTerm);

  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(setFilterTerm(value));
  };
  return (
    <FilterContainer>
      <FilterLabel>
        Find contact...
        <FilterInput
          type="text"
          value={filterTerm}
          placeholder="Enter name..."
          onChange={changeFilter}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
