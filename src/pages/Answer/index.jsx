import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.css";
import { CodeContext } from "../../contexts/CodeContext";
import { AnsRun } from "../../Problem/AnsRun";
import { AnsCheck } from "../../Problem/AnsCheck";

export const Answer = () => {
  const [pageState, setPageState] = useState("answer");
  const navigate = useNavigate();
  const [isFinish, setIsFinish] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== "/";
  const { code } = useContext(CodeContext);
  const [outputArray, setOutputArray] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [Ans, setAns] = useState("不正解");

  useEffect(() => {
    const executeCode = async () => {
      try {
        const result = await AnsRun({ code });
        console.log(`executeCode_result: ${result}`);
        setOutputArray(result);

        // 判定を実行
        const isMatching = AnsCheck(result);
        console.log(`isMatching: ${isMatching}`);
        setIsCheck(isMatching);
      } catch (error) {
        console.error("Error executing code:", error);
        setOutputArray([]);
        setIsCheck(false);
      }
    };

    executeCode();
  }, [code, isCheck]);

  useEffect(() => {
    setAns(isCheck ? "正解" : "不正解");
    alert(`${Ans}`);
    console.log(`Ans: ${Ans}`);
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
