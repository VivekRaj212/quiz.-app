import React, { useState } from "react";
import { Card, Space,Button } from "antd";
import { useNavigate} from "react-router-dom";
import {data} from "../../data";
import "../Quiz/Quiz.css";
import Question from "../Question";
import Buttons from "../Buttons/Buttons";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submittedData, setSubmittedData] = useState({});
  const [totalTime, settotalTime] = useState(300);
  const navigate=  useNavigate();

  const timerId =setTimeout(() => {
    if(totalTime === 0)
    {
       calculateScore();
    }
    else {

      settotalTime(totalTime - 1);
    }
   
  }, 1000);

  const updateSubmission=(index, value)=> {

    setSubmittedData({...submittedData,[index]: value})
  }

  console.log("submitted Data", submittedData);

  const calculateScore=()=> {
    clearTimeout(timerId);

    let score =0;

    data.forEach((question, index)=> {

      if(question.answer === submittedData[index]) 
      {
        score++;
      }

    })
    navigate("/result", {state: {score: score, submittedData: submittedData}})
}

  return (
    <div className="Quiz">
      <Space direction="vertical" size={16}>
        <Card
          style={{
            width: 600,
            height: "max-content",
            backgroundColor: "rgb(33, 152, 207)",
          }}
        >
          <h3>Total Time: {totalTime} sec</h3>

         <div style={{display: "flex", justifyContent: "center", flexDirection: "column", rowGap: "30px"}}>
          <Question 
          currentQuestionIndex={currentQuestionIndex}
          currentQuestion={data[currentQuestionIndex]}
          updateSubmission={updateSubmission}
          selectedOption={submittedData[currentQuestionIndex]}
          />    
          <Buttons 
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            currentQuestionIndex={currentQuestionIndex}
            submittedData={submittedData}
            calculateScore={calculateScore}
          /> 
          </div>
        </Card>
      </Space>
    </div>
  );
};

export default Quiz;
