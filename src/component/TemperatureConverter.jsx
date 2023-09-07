import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    setError('');

    if (!temperature || isNaN(temperature)) {
      setError('Please enter a valid number.');
      return;
    }

    if (scale === 'celsius') {
      const fahrenheit = (parseFloat(temperature) * 9/5) + 32;
      setResult(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else {
      const celsius = (parseFloat(temperature) - 32) * 5/9;
      setResult(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    }

    setTemperature("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConvert();
  }

  return (
    <Box w="100%" h="100vh"  bgGradient='linear(to-r, red.500, yellow.500)'>
    <Box   w="50%" m="auto" p={4}>
        <Heading>Temperature Converter</Heading>
      <VStack  mt="50px" spacing={4}>
        <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!!error}>
          <FormLabel>Enter Temperature</FormLabel>
          <Input
            color="white"
            type="text"
            placeholder="Enter temperature value"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Select Scale</FormLabel>
          <Select
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </Select>
        </FormControl>

        <Button onClick={handleConvert} mt="50px" colorScheme="blue">
          Convert
        </Button>
        </form>
        {result && (
          <Text fontSize="lg" fontWeight="bold">
            {result}
          </Text>
        )}
      </VStack>
    </Box>
    </Box>
  );
};

export default TemperatureConverter;
