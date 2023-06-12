import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { data } from "../../data";
import "../Quiz/Quiz.css";

const Buttons = ({
  setCurrentQuestionIndex,
  currentQuestionIndex,
  submittedData,
  calculateScore
}) => {

  const navigate= useNavigate();
  return (
    <div className="all-buttons">
      <Button
        type="primary"
        className="btn"
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        disabled={currentQuestionIndex === 0}
      >
        Back
      </Button>
      {currentQuestionIndex < data.length - 1 ? (
        <Button
          type="primary"
          className="btn"
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          disabled={!submittedData[currentQuestionIndex]}
        >
          Next
        </Button>
      ) : (
        <Button
          type="primary"
          disabled={!submittedData[currentQuestionIndex]}
          onClick={()=> calculateScore()}
        >
          Submit
        </Button>
      )}
      <Button type="primary" onClick={()=> navigate("/")} style={{float: "right", position: "absolute",right: "19px", backgroundColor: "crimson"}}>Return to Home</Button>
    </div>
  );
};

export default Buttons;
