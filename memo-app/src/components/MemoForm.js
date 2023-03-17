import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuidv4 } from 'uuid';

function MemoForm({ addMemo }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMemo = {
      id: uuidv4(),
      text: text.trim(),
      timestamp: new Date(),
    };
    if (newMemo.text) {
      addMemo(newMemo);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="memo-text" className="block mb-2 font-medium">
        Memo
      </label>
      <textarea
        id="memo-text"
        className="w-full h-32 p-2 border border-gray-300 rounded"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Save Memo
      </button>
      {text && (
        <div className="mt-2">
          <label className="block mb-2 font-medium">Preview</label>
          <div className="bg-white p-2 border border-gray-300 rounded">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      )}
    </form>
  );
}

export default MemoForm;
