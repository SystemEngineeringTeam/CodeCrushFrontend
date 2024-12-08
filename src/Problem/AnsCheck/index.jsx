export const AnsCheck = (outputArray) => {
  const ans = [
    "平方数の合計を計算します。",
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
    "",
  ];

  console.log(`AnsCheck_outputArray: ${outputArray}`);

  // 配列が一致しているか確認
  const isMatch = JSON.stringify(outputArray) == JSON.stringify(ans);
  console.log(`AnsCheck_output_type: ${typeof outputArray}`);
  console.log(`JSON.stringify(output): ${JSON.stringify(outputArray)}`);
  console.log(`JSON.stringify(ans): ${JSON.stringify(ans)}`);
  console.log(`ismaiting: ${isMatch}`);
  return isMatch;

  // if (isMatch) {
  //   console.log("出力は期待される結果と一致しています！");
  // } else {
  //   console.log("出力が期待される結果と一致しません。");
  //   // 差分を表示
  //   for (let i = 0; i < Math.max(outputArray.length, ans.length); i++) {
  //     if (outputArray[i] !== ans[i]) {
  //       console.log(`差分 [行 ${i + 1}]: 出力 = "${outputArray[i] || "なし"}", 期待値 = "${ans[i] || "なし"}"`);
  //     }
  //   }
  // }
};
