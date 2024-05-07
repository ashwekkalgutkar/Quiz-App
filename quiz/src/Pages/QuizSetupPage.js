import React from 'react';
import QuizSetupForm from '../Components/QuizSetupForm';

const QuizSetupPage = ({ onStartQuiz }) => {
  const handleStartQuiz = (formData) => {
    onStartQuiz(formData);
  };

  return (
    <div>
      <h1>Quiz Setup</h1>
      <QuizSetupForm onSubmit={handleStartQuiz} />
    </div>
  );
};

export default QuizSetupPage;
