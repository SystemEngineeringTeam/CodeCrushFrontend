const apiUrl = import.meta.env.VITE_API_URL_1;

export const AnsRun = async ({ code }) => {
  console.log(`Runだよイェええええい code: ${code}`);
  const proxyUrl = `${apiUrl}/run`; // FastAPIのURL

  // APIに送信するデータ
  const data = {
    source_code: code,
    language: "c",
    api_key: "guest",
    longpoll: true,
  };

  try {
    // ジョブの作成
    const response = await fetch(proxyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const initialResult = await response.json();
    console.log("Initial Response:", initialResult);

    if (!initialResult.id) {
      return ["ジョブの作成に失敗しました。"];
    }

    // ジョブの結果をポーリング
    const jobId = initialResult.id;
    const detailsUrl = `${apiUrl}/details/${jobId}`; // FastAPIの結果取得エンドポイント

    const pollJobDetails = async () => {
      while (true) {
        const detailsResponse = await fetch(detailsUrl);
        const jobDetails = await detailsResponse.json();
        console.log("Job Details Response:", jobDetails);

        if (jobDetails.status === "completed") {
          if (jobDetails.stdout || jobDetails.stderr) {
            const stdoutArray = jobDetails.stdout.split("\n");
            const stderrArray = jobDetails.stderr.split("\n");
            return stdoutArray.length > 0 ? stdoutArray : stderrArray;
          } else {
            return ["実行結果が見つかりませんでした。"];
          }
        } else if (jobDetails.status !== "running") {
          return ["コードの実行に失敗しました。"];
        }

        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1秒待機
      }
    };

    return await pollJobDetails();
  } catch (error) {
    console.error("エラー:", error);
    return ["エラーが発生しました。"];
  }
};
