import React, { useState } from 'react';

const QuizSetupForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, category, difficulty, numQuestions });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
      </select>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">Select Difficulty</option>
      </select>
      <input
        type="number"
        placeholder="Choose Number of Questions"
        value={numQuestions}
        onChange={(e) => setNumQuestions(e.target.value)}
      />
      <button type="submit">START QUIZ</button>
    </form>
  );
};

export default QuizSetupForm;
