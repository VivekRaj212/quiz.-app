import React from "react";
import { Card, Space } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../HomePage/Home.css";
import {data} from "../../data";



const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <Space direction="vertical" size={16} >
        <Card
          className="welcome-card"
        >
        <h1>Welcome to the Challenge</h1>
          <div className="row-gap">
          <h3>You will be presented with {data.length} MCQ's</h3>
          <h2>Can you Score 100% ?</h2>
          </div>
          <Space wrap className="row-gap"> 
              <Button type="primary" onClick={()=> navigate("/quiz")} style={{backgroundColor: "#d11e3f"}}>Start Quiz</Button>
          </Space>
        </Card>
      </Space>
      
    </div>
  );
};

export default Home;
