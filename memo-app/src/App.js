import React, { useEffect, useState } from 'react';
import { getMemoData, setMemoData } from './components/memoData';
import MemoForm from './components/MemoForm';
import MemoList from './components/MemoList';

function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    setMemos(getMemoData());
  }, []);

  const addMemo = (newMemo) => {
    const newMemos = [newMemo, ...memos];
    setMemos(newMemos);
    setMemoData(newMemos);
  };

  const deleteMemo = (memoId) => {
    const newMemos = memos.filter((memo) => memo.id !== memoId);
    setMemos(newMemos);
    setMemoData(newMemos);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Memo App</h1>
      <MemoForm addMemo={addMemo} />
      <MemoList memos={memos} deleteMemo={deleteMemo} />
    </div>
  );
}

export default App;
