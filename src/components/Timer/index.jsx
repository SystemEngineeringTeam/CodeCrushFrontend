import { useCallback, useContext, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { GetStatus } from "../Http/GetStatus";
import { CodeContext } from "../../contexts/CodeContext";

export const Timer = ({ setIsFinish, phase }) => {
  let initialTime = 6000;
  if (phase === "read") {
    initialTime = 15;
  } else if (phase === "delete") {
    initialTime = 15;
  } else if (phase === "fix") {
    initialTime = 20;
  }

  const { roomId } = useContext(CodeContext);
  const time = new Date();
  time.setSeconds(time.getSeconds() + initialTime);
  const [countTime, setCountTime] = useState("timerHigh");

  const { seconds, minutes, isRunning, start, pause } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
    autoStart: true, //trueの場合タイマーをは自動でスタート、falseの場合はボタンを押してスタート
  });

  const updateCountTime = useCallback(() => {
    if (minutes < 1 && seconds < 20) {
      setCountTime("timerLow");
    } else if (minutes < 1) {
      setCountTime("timerMedium");
    } else {
      setCountTime("timerHigh");
    }
    if (minutes <= 0 && seconds <= 0) {
      setIsFinish(true);
    }
  }, [minutes, seconds, setIsFinish]);

  useEffect(() => {
    updateCountTime();
  }, [updateCountTime]);

  useEffect(() => {
    if (phase === "answer") {
      pause(); // タイマーを停止
    } else {
      start(); // phase が "answer" でないときはスタート
    }
  }, [phase, start, pause]);

  const timerStyles = {
    timerHigh: {
      backgroundColor: "#E8FDE7",
      color: "#2ADA6E",
      border: "3px solid #2ADA6E",
    },
    timerMedium: {
      backgroundColor: "#FFF6D6",
      color: "#FFC80B",
      border: "3px solid #FFC80B",
    },
    timerLow: {
      backgroundColor: "#FFE3E3",
      color: "#E54671",
      border: "3px solid #E54671",
    },
  };

  return (
    <div>
      <GetStatus roomId={roomId} />
      <div
        style={{
          ...timerStyles[countTime],
          borderRadius: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "42px",
          fontWeight: "bold",
          flexGrow: "1",
          boxSizing: "border-box",
        }}
      >
        {phase !== "answer" ? (
          <div>
            <span style={{ fontSize: "14px" }}>残り時間</span>
            <span>{minutes}</span>:
            <span>{seconds < 10 ? "0" + seconds : "" + seconds}</span>
          </div>
        ) : (
          <p>終了</p>
        )}
      </div>
    </div>
  );
};
