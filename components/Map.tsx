import { Box } from '@chakra-ui/core';
import { LatLngTuple } from 'leaflet';
import React from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';

interface MapCompProps {
  coordinates: LatLngTuple;
  address: string;
  ip: string;
}

const ClientMap: React.FC<MapCompProps> = ({ coordinates, address, ip }) => (
  <Box
    top={{ base: '66%', sm: '76%', md: '80%', lg: '78%' }}
    position="absolute"
    zIndex={-9}
    w="100%"
    h="85vh"
  >
    <Map
      useFlyTo
      style={{ width: '100%', height: '100%' }}
      zoomControl={false}
      scrollWheelZoom={false}
      center={coordinates}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          <div>{ip}</div>
          <div>{address}</div>
        </Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </Map>
  </Box>
);

export default ClientMap;
