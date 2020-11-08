import { SimpleGrid } from '@chakra-ui/core';
import React from 'react';

import { IDetails } from '../../utils/models';
import Info from './Info';

const Card: React.FC<IDetails> = ({ ip, isp, location, timezone }) => (
  <SimpleGrid
    rounded="xl"
    boxShadow="xl"
    w="100%"
    maxW="1024px"
    bg="white"
    spacingY={{ base: 5 }}
    columns={{ base: 1, sm: 2, md: 4 }}
    mx="auto"
    py={{ base: 5, lg: 6 }}
    px={{ md: 5, lg: 8 }}
  >
    <Info keyTxt="IP Address" valueTxt={ip} mid={false} />
    <Info keyTxt="Location" valueTxt={location} mid />
    <Info keyTxt="TimeZone" valueTxt={timezone} mid />
    <Info keyTxt="ISP" valueTxt={isp} mid />
  </SimpleGrid>
);

export default Card;
