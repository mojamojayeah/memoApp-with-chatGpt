import React from 'react';
import Memo from './Memo';

function MemoList({ memos, deleteMemo }) {
  return (
    <div className="mt-4">
      {memos.length > 0 ? (
        <ul>
          {memos.map((memo) => (
            <Memo key={memo.id} memo={memo} deleteMemo={deleteMemo} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No memos yet!</p>
      )}
    </div>
  );
}

export default MemoList;
