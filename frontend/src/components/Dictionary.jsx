import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [error, setError] = useState('');

  const fetchDefinition = async () => {
    try {
      const response = await axios.get(`/api/definition/${word}`);
      setDefinition(response.data.definition);
      setError('');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('No definition found.');
      } else {
        setError('Error fetching definition.');
      }
      setDefinition('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDefinition();
  };

  return (
    <>
    <Nav/>
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Word Definition Finder</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
          className="p-2 mb-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Get Definition
        </button>
      </form>
      {definition && (
        <div className="mt-4 p-2 border border-gray-200 rounded-md">
          <strong className="block text-lg">Definition:</strong>
          <p>{definition}</p>
        </div>
      )}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
    </>
  );
};

export default Dictionary;