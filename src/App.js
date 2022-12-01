import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [body, setBody] = useState([{ id: 1, comment: "리액트 최고" }]);
  const [comment, setComment] = useState("");

  const AddHandler = () => {
    const addList = {
      id: body.length + 1,
      comment: comment,
    };
    setBody([...body, addList]);
  };
  return (
    <div className="total">
      <div className="top1">
        <input
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></input>
        <button onClick={AddHandler}>추가하기</button>
      </div>
      <div className="top2">Todo List</div>
      <div className="com1">
        {body.map((Body) => {
          return <App1 Body={Body} key={Body.id}></App1>;
        })}
      </div>
    </div>
  );
};

const App1 = (props) => {
  console.log(props);
  return (
    <div className="com2">
      <p>{props.Body.comment}</p>
    </div>
  );
};

export default App;
