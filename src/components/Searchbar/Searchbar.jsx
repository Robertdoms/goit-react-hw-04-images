import {
  StyledHeader,
  StyledForm,
  StyledSearchFormBtn,
  StyledSpan,
  StyledInput,
} from './Searchbar.styled';

import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

const Searchbar = ({ onFormSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputValue = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    onFormSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledSearchFormBtn type="submit">
          <AiOutlineSearch
            style={{
              width: '20',
              height: '20',
              verticalAlign: 'middle',
            }}
          />
          <StyledSpan>Search</StyledSpan>
        </StyledSearchFormBtn>

        <StyledInput
          onChange={handleInputValue}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

export default Searchbar;
