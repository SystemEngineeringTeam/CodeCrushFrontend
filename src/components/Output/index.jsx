//outputArray(出力を"\n"で区切った配列)を引数として受け取る
export const Output = (outputArray) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "0.1875rem solid #DBE2E7",
          borderRadius: "1.875rem",
          width: "52.75rem",
          height: "12.625rem",
        }}
      >
        <div
          style={{
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#5A6977",
              width: "50.25rem",
              borderBottom: "0.125rem solid #DBE2E7",
            }}
          >
            実行結果
          </p>
          <div
            style={{
              overflow: "auto",
              width: "50.25rem",
              height: "7.375rem",
              color: "#5A6977",
            }}
          >
            {outputArray.outputArray.map((element, index) => {
              return (
                <p
                  key={index}
                  style={{
                    margin: 0,
                  }}
                >
                  {element}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
