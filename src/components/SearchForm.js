import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() !== '') {
      setErrorMsg('');
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg('Please enter a search term.');
    }
  };

  return (
    <div className="search-items">
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="search-items">
          <div className="search-items">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="search"
                name="searchTerm"
                value={searchTerm}
                placeholder="Search for album, artist or playlist"
                onChange={handleInputChange}
                autoComplete="on"
              />
            </Form.Group>
          </div>
          <div className="search-items">

            <Button variant="secondary" type="submit">
              Search
            </Button>
          </div>

        </div>

        {/* <button className="search-buttons" class="btn btn-primary btn-lg" variant="info" type="submit">Search</button> */}
      </Form>
    </div>
  );
};

export default SearchForm;
