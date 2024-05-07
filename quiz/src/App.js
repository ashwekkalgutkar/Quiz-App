
import Navbar from './Components/Navbar';
import { Box,ChakraProvider } from '@chakra-ui/react';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Leaderboard from './Pages/Leaderboard';
import QuizPage from './Pages/QuizPage';


function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/leaderboard' element={<Leaderboard />}/>
          <Route path='/quizpage' element={<QuizPage />}/>
        </Routes>
      </Box>
    </ChakraProvider>
    </div>
  );
}

export default App;
