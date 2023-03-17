import React from 'react';
import ReactMarkdown from 'react-markdown';

function Memo({ memo, deleteMemo }) {
  const handleDelete = () => {
    deleteMemo(memo.id);
  };

  return (
    <li className="bg-white p-4 border border-gray-300 rounded mb-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">{memo.id}</h2>
        <button onClick={handleDelete} className="text-red-500">
          Delete
        </button>
      </div>
      <ReactMarkdown>{memo.text}</ReactMarkdown>
      <div className="text-gray-500 mt-2">
        {new Date(memo.timestamp).toLocaleString()}
      </div>
    </li>
  );
}

export default Memo;
