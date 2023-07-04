import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f3f4;
  border-radius: 8px;
  padding: 4px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: #4285f4;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform search using the searchQuery state
    console.log("Performing search for:", searchQuery);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
