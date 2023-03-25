import React from 'react';
import styled from 'styled-components';
import weatherIcon from '../images/weather-icon.png';
import gpsIcon from '../images/gps-icon.png';

const Container = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 810px;
  margin: 20px;
  border-bottom: 2px solid white;
`;

const SearchButton = styled.button`
  background-color: #6e707a;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  width: 161px;
  height: 40px;
  position: absolute;
  left: 11px;
  top: 18px;
`;

const Icon = styled.img`
  width: 170px;
  height: 170px;
  cursor: pointer;
  margin-top: 10px;
`;

const GpsIcon = styled.img`
  width: 40px;
  height: 40px;
  /* background-color: white; */
  position: absolute;
  right: 15px;
  top: 18px;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  return (
    <Container>
      <SearchButton>Search for places</SearchButton>
      <GpsIcon src={gpsIcon} />
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
