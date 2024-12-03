import { createContext, useState } from "react";

// メモの状態管理を行うためのContextを作成
const MemoContext = createContext();

export const MemoProvider = ({ children }) => {
  // メモの内容を管理するための状態を定義
  const [memoContents, setMemoContents] = useState("");
  return (
    <MemoContext.Provider value={{ memoContents, setMemoContents }}>
      {children}
    </MemoContext.Provider>
  );
};

export { MemoContext };
