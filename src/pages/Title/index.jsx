import "./index.css";
import { useNavigate } from "react-router-dom";

export const Title = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/match");
  };

  return (
    <>
      <div className="title-container" onClick={() => handleSubmit()}>
        <div className="titleBox">
          <img
            src="/CodeCrushLogo.svg"
            alt="titleLogo"
            style={{
              width: "500px",
              height: "auto",
            }}
          />
        </div>
        <p className="subtitle">read & write</p>
      </div>
    </>
  );
};
