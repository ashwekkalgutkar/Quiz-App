import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack } from '@chakra-ui/react';
import Quiz from '../Components/Quiz';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {     
    async function fetchData() {
      try {
        const userData = JSON.parse(sessionStorage.getItem("user-data"));
        const { category, number } = userData;
        const response = await axios.get(`https://dark-erin-frog.cyclic.app/data?category=${category}&_limit=${number}`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    }

    fetchData();
  }, []);

  const handleNextQuestion = () => {
    navigate("/leaderboard");
  };
    
  return (
    <Box mt={50} w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} h={'100vh'} gap={10}>
      {questions.map((question, index) => (
        <Quiz key={index} question={question} />
      ))}
      <Stack display={'flex'} flexDirection={'row'} mb={15}>
        <Button onClick={handleNextQuestion}>Submit</Button>
      </Stack>
    </Box>
  );
};

export default QuizPage;
