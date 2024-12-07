import { useState } from "react";
import { Code } from "../Code";
import { Output } from "../Output/index";
import { Player } from "../Player";
import { Run } from "../Run";
import { DocumentButton } from "./../CodeDocument/Button";
import "./index.css";
import { CodeDocument } from "../CodeDocument/Docment";

export const Main = () => {
  const [code, setCode] = useState("");
  const [outputArray, setOutputArray] = useState([]);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

  return (
    <div className="main-container">
      <div style={{ display: "flex", gap: isDocumentOpen ? "22px" : 0 }}>
        <div className={`main-inner ${isDocumentOpen ? "open" : ""}`}>
          <div className="main-header">
            <Player pattern={1} />
            <Run code={code} setOutputArray={setOutputArray} />
            <DocumentButton setIsDocumentOpen={setIsDocumentOpen} />
          </div>
          <div
            style={{
              height: "2px",
              width: "99.8%",
              margin: "0 auto 6px auto",
              borderRadius: "10px",
              backgroundColor: "#DBE2E7",
            }}
          />
          <Code code={code} setCode={setCode} />
        </div>
        {isDocumentOpen ? <CodeDocument /> : <div />}
      </div>
      <Output outputArray={outputArray} />
    </div>
  );
};
