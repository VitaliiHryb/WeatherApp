import React, { useState } from 'react';
import styled from 'styled-components';
import popularCities from '../../tools/popularCities.js';

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #1e213a;
  width: 375px;
  height: 660px;
  padding: 15px;
  position: absolute;
  top: 10px;
  left: -190px;
  border: 1px solid #e7e7eb;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: calc(100% - 120px);
  height: 48px;
  margin-bottom: 20px;
  border: 1px solid #e7e7eb;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  color: #e7e7eb;
  background-color: #1e213a;
  &::placeholder {
    color: #e7e7eb;
    opacity: 0.5;
  }
`;

const WeatherNavContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 86px;
  height: 48px;
  background-color: #3c47e9;
  color: #e7e7eb;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  color: #e7e7eb;
  cursor: pointer;
`;

const MatchingCitiesContainer = styled.div`
  width: 80%;
  position: absolute;
  top: 90px;
  left: 10px;
  right: 0;
  background-color: #1e213a;
  color: #e7e7eb;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MatchingCity = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  color: #e7e7eb;
  cursor: pointer;

  &:hover {
    border: 1px solid #a09fb1;
    border-radius: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

function WeatherNav({ onClose }) {
  const [cityInput, setCityInput] = useState('');
  const [matchingCities, setMatchingCities] = useState([]);

  const handleCityInputChange = e => {
    const inputVal = e.target.value;
    setCityInput(inputVal);

    if (inputVal === '') {
      setMatchingCities([]);
    } else {
      // Filter popularCities array to get matching cities
      const matches = popularCities
        .filter(city => city.toLowerCase().startsWith(inputVal.toLowerCase()))
        .slice(0, 10);
      setMatchingCities(matches);
    }
  };

  const handleSearchSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    const selectedCity = matchingCities.find(city => city === cityInput);
    if (selectedCity) {
      console.log(`You have chosen ${selectedCity}`);
      onClose();
    }
  };

  return (
    <WeatherNavContainer>
      <NavContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <form onSubmit={handleSearchSubmit}>
          <InputContainer>
            <Input
              placeholder="Search location"
              value={cityInput}
              onChange={handleCityInputChange}
            />
            <Button onClick={e => handleSearchSubmit(e)}>Search</Button>
          </InputContainer>
          {matchingCities.length > 0 && (
            <MatchingCitiesContainer>
              {matchingCities.map(city => (
                <MatchingCity
                  key={city}
                  onClick={() => {
                    setCityInput(city);
                    handleSearchSubmit();
                  }}
                >
                  {city}
                </MatchingCity>
              ))}
            </MatchingCitiesContainer>
          )}
        </form>
      </NavContainer>
    </WeatherNavContainer>
  );
}

export default WeatherNav;
