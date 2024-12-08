import { useContext } from "react";
import { CodeContext } from "../../contexts/CodeContext";

export const Exercise02 = ({ inputNum }) => {
  const { setCode } = useContext(CodeContext);

  const input = inputNum; // 任意の入力値を設定

  // Cコードのテンプレート
  const code = `#include <stdio.h>

// 入力値までの平方数の合計を計算する関数
int sum_of_squares(int n)
{
    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += i * i;
    }
    return sum;
}

// 各平方数の詳細を表示する関数
void display_squares(int n)
{
    printf("計算の詳細:\\n");
    for (int i = 1; i <= n; i++)
    {
        printf("%d^2 = %d\\n", i, i * i);
    }
}

// 入力値が正しいか確認する関数
int validate_input(int input)
{
    if (input <= 0)
    {
        printf("エラー: 1以上の整数を入力してください。\\n");
        return 0; // 無効
    }
    return 1; // 有効
}

// メイン関数
int main()
{
    int input = ${input};

    printf("平方数の合計を計算します。\\n");
    printf("このプログラムでは、1以上の整数を入力して、平方数の合計を計算します。\\n");
    printf("さらに、各平方数の詳細も表示します。\\n");
    printf("\\n--- プログラム開始 ---\\n\\n");

    printf("1以上の整数を入力してください: ");

    // 入力値の検証
    if (!validate_input(input))
    {
        printf("プログラムを終了します。\\n");
        return 0; // エラー時は終了
    }

    // 平方数の合計を計算
    int result = sum_of_squares(input);

    // 結果を表示
    printf("\\n結果:\\n");
    printf("1から%dまでの平方数の合計は: %d です。\\n", input, result);

    // 詳細を表示
    display_squares(input);

    // 終了メッセージ
    printf("\\n--- プログラム終了 ---\\n");
    printf("ご利用ありがとうございました！\\n");
    return 0;
}
`;

  // setCode関数を呼び出してコードを設定
  setCode(code);
};
