import { useContext, useEffect } from "react";
import { MemoContext } from "./../../contexts/MemoContext"; // メモの状態管理を行うためのContext

export const Memo = () => {
  const { memoContents, setMemoContents } = useContext(MemoContext);

  // 初回レンダリング時にlocalStorageから保存されたメモを読み込み
  useEffect(() => {
    const savedMemo = localStorage.getItem("memoContents");
    if (savedMemo) {
      setMemoContents(savedMemo);
    }
  }, [setMemoContents]);

  const handleChange = (e) => {
    const newMemo = e.target.value;
    localStorage.setItem("memoContents", newMemo);
    setMemoContents(newMemo);
  };

  return (
    <div style={{ boxShadow: "0 0 10px #00000010", borderRadius: "30px" }}>
      <div
        style={{
          color: "#5A6977",
          fontSize: "16px",
          fontWeight: "bold",
          marginLeft: "24px",
          paddingTop: "8px",
          paddingBottom: "6px",
        }}
      >
        メモ
      </div>
      <div
        style={{
          height: "2px",
          width: "97%",
          margin: "0 auto",
          borderRadius: "10px",
          backgroundColor: "#DBE2E7",
        }}
      />
      <textarea
        id="story"
        name="story"
        rows="5"
        style={{
          display: "block",
          width: "96.8%",
          color: "#5A6977",
          margin: "0 auto",
          resize: "none",
          border: "none",
          outline: "none",
        }}
        value={memoContents}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
