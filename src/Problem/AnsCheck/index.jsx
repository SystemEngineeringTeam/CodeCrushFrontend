import { useEffect } from "react";

export const AnsCheck = ({ outputArray, setIsCheck }) => {
  const ans = [
    "平方数の合計を計算します。",
    "",
    "このプログラムでは、1以上の整数を入力して、平方数の合計を計算します。",
    "さらに、各平方数の詳細も表示します。",
    "",
    "--- プログラム開始 ---",
    "",
    "1以上の整数を入力してください: ",
    "結果:",
    "1から10までの平方数の合計は: 385 です。",
    "計算の詳細:",
    "1^2 = 1",
    "2^2 = 4",
    "3^2 = 9",
    "4^2 = 16",
    "5^2 = 25",
    "6^2 = 36",
    "7^2 = 49",
    "8^2 = 64",
    "9^2 = 81",
    "10^2 = 100",
    "",
    "--- プログラム終了 ---",
    "ご利用ありがとうございました！",
  ];

  useEffect(() => {
    // 比較する部分の範囲を設定
    const startIndex = ans.indexOf("結果:");
    const endIndex = ans.indexOf("10^2 = 100") + 1;

    // 必要な部分を抽出
    const ansSubset = ans.slice(startIndex, endIndex);

    // 比較処理
    const isMatching =
      JSON.stringify(outputArray) === JSON.stringify(ansSubset);

    // 結果をsetIsCheckに反映
    setIsCheck(isMatching);
  }, [outputArray, setIsCheck]); // outputArray または setIsCheck が変わるときだけ実行
};
