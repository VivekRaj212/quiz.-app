import React from "react";
import { Card, Space } from "antd";
import { Button } from "antd";
import "../Result/Result.css";
import { useLocation,useNavigate} from "react-router-dom";
import {data} from "../../data";
import "../Result/Result.css";

const Result = () => {
  const {state} = useLocation();
  console.log("location",state);
  const navigate= useNavigate();

  
  return (
    <div className="Result">
      <Space direction="vertical" size={16}>
        <Card
          style={{
            width: 600,
            height: "max-content",
          }}
          className="result-style"
          
        >
        <div style={{paddingBottom: "20px"}}>
          <h1 style={{textAlign: "center"}}>Congratulations!</h1>
          <h3 style={{textAlign: "center"}}>Your Score: {state.score} {state.score < 6 ? "🙄" : "😊"}</h3>
          </div>
          {
            data.map((question,index)=> {

              return (
                <div style={{fontSize: "18px"}}>
                  <p style={{fontWeight: 500}}>{index+1}. {question.question}</p>
                  <p className={question.answer === state.submittedData[index]? "correct" : "incorrect"}>{state.submittedData[index] ? `Your Answer: ${state.submittedData[index]}` : "Not Answered"}</p>
                </div>
              )
            })
          }
          <Space wrap style={{paddingTop: "20px"}} >
              <Button type="primary" style={{ backgroundColor: "crimson" }} onClick={()=> navigate("/") }>
                Start Again
              </Button>
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default Result;
