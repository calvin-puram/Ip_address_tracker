import { Flex, IconButton, Input } from '@chakra-ui/core';
import React, { useState } from 'react';

import { TSubmit } from '../utils/models';
import IcoArrow from './icons/IcoArrow';

const InputForm: React.FC<{ submit: TSubmit }> = ({ submit }) => {
  const [value, setValue] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submit(value);
  };

  return (
    <Flex
      as="form"
      w="100%"
      maxW="500px"
      mx="auto"
      mb={6}
      onSubmit={handleSubmit}
    >
      <Input
        value={value}
        onChange={handleInput}
        placeholder="Search for any IP address or domain"
        aria-label="Search"
        bgColor="white"
        size="lg"
        rounded="xl"
        roundedRight={0}
      />
      <IconButton
        onClick={handleSubmit}
        icon={<IcoArrow />}
        type="submit"
        aria-label="Submit"
        bgColor="hsl(0, 0%, 10%)"
        size="lg"
        rounded="xl"
        roundedLeft={0}
        _hover={{ bgColor: 'hsl(0, 0%, 32%)' }}
        _focus={{ bgColor: 'hsl(0, 0%, 32%)' }}
        _active={{ bgColor: 'hsl(0, 0%, 35%)' }}
      />
    </Flex>
  );
};

export default InputForm;
