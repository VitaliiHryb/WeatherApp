import React, { useState } from 'react';
import styled from 'styled-components';
import weatherIcon from '../../images/weather-icon.png';
import gpsIcon from '../../images/gps-icon.png';
import WeatherNav from './WeatherNav';

const Container = styled.div`
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 810px;
  padding-bottom: 40px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #1e213a;
  justify-content: space-between;
  width: 100vw;
  border: none;
`;

const SearchButton = styled.button`
  background-color: #6e707a;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  width: 161px;
  height: 40px;
  margin-left: 11px;
`;

const GpsIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 2px;
`;

const Icon = styled.img`
  width: 170px;
  height: 170px;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  margin-top: 120px;
`;

const Temperature = styled.div`
  font-size: 100px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 55px;
  opacity: 0.9;
`;

const Description = styled.div`
  font-size: 36px;
  margin-bottom: 0;
  margin-top: 80px;
  opacity: 0.8;
`;

const Date = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  opacity: 0.8;
  margin-bottom: 5px;
  margin-top: 20px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 20px;
`;

const LocationIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const LocationName = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  opacity: 0.8;
`;

const Celsium = styled.span`
  font-size: 48px;
  font-weight: 400;
  opacity: 0.8;
  margin-left: -15px;
`;

function Weather() {
  const [showNav, setShowNav] = useState(false);

  const onClose = () => setShowNav(false);

  return (
    <Container className="weather-container">
      <NavContainer>
        <SearchButton onClick={() => setShowNav(true)}>
          Search for places
        </SearchButton>
        <GpsIcon src={gpsIcon} />
      </NavContainer>
      {showNav === true ? <WeatherNav onClose={onClose} /> : <></>}
      <WeatherContainer>
        <Icon src={weatherIcon} />
        <Temperature>
          15 <Celsium>°C</Celsium>
        </Temperature>
        <Description>Shower</Description>
        <Date>Today &nbsp; • &nbsp; Fri, 5 Jun</Date>
        <LocationContainer>
          <LocationIcon src={gpsIcon} />
          <LocationName>Helsinki</LocationName>
        </LocationContainer>
      </WeatherContainer>
    </Container>
  );
}

export default Weather;
