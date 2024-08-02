import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import axios from 'axios';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface CountryData {
  country: string;
  countryInfo: {
    _id: string;
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;
}

const MapPage: React.FC = () => {
  const { data, error, isLoading } = useQuery<CountryData[]>('countriesData', async () => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');
    return data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const center: LatLngExpression = [20, 0]; // Center of the map
  const zoom = 2; // Zoom level

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">COVID-19 Cases by Country</h2>
      <MapContainer center={center} zoom={zoom} style={{ height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data?.map((country) => (
          <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;
