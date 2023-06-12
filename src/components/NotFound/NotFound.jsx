import React, {useEffect, useState} from "react";
import { Card, Space } from "antd";
import "../../App.css";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    setTimeout(() => {
        navigate("/");
      }, 3000);
  },[])
  
  return (
    <div className="Error">
      <Space direction="vertical" size={16}>
        <Card
          style={{
            width: 600,
            height: 300,
            backgroundColor: "rgb(33, 152, 207)",
          }}
        >
          <h1 style={{ color: "white" }}>Not Found Page</h1>
        </Card>
      </Space>
    </div>
  );
};

export default NotFound;
