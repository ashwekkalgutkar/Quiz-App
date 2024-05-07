import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Quiz = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box mb={5} mt={50} w={'100vh'} border={'1px solid black'} bg='skyblue' color={'white'}>
      <Text mb={5}>{question.question}</Text>
      {question.options.map((option, index) => (
        <Button
          key={index}
          onClick={() => handleOptionClick(option)}
          bg={selectedOption === option ? 'red' : ''}
          _hover={{ bg: selectedOption === option ? 'red' : 'blue' }}
          color={selectedOption === option ? 'white' : 'black'}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

export default Quiz;
