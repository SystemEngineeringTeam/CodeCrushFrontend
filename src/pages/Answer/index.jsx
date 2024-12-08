import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css";
import { Run } from "../../components/Run";
import { CodeContext } from "../../contexts/CodeContext";
import { AnsCheck } from "../../Problem/AnsCheck";

export const Answer = () => {
  const [pageState, setPageState] = useState("answer");
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/"; // "/" では Sidebar を非表示
  const { code } = useContext(CodeContext);
  const [outputArray, setOdutputArray] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [Ans, setAns] = useState("不正解");

  Run({ code, setOdutputArray });

  //ここでやりたいこと outputArrayと答えを比較する
  AnsCheck({ outputArray, setIsCheck });
  useEffect(() => {
    console.log(`isCheck: ${isCheck}`);
    if (isCheck) {
      setAns("正解");
      console.log(`AnswerAns: ${Ans}`);
    }
  }, [isCheck]);

  useEffect(() => {
    if (isFinish) {
      navigate("/");
    }
  }, [isFinish, navigate]);

  return (
    <div className="layout">
      <Header />
      {showSidebar && (
        <div className="layout-main">
          <Sidebar setIsFinish={setIsFinish} phase={pageState} />
          <Main editFlag={true} phase={pageState} />
        </div>
      )}
    </div>
  );
};
