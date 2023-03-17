const MEMO_STORAGE_KEY = 'memoData';

export const getMemoData = () => {
  const memoData = localStorage.getItem(MEMO_STORAGE_KEY);
  if (memoData) {
    return JSON.parse(memoData);
  } else {
    return [];
  }
};

export const setMemoData = (memoData) => {
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(memoData));
};
