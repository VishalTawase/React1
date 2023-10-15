import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="word-counter">
      <textarea
        placeholder="Type or paste your text here..."
        onChange={handleChange}
        value={text}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
