import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Button } from 'antd';

const MyButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count === 0){
        document.title = `plase click me`;
    }else{
        document.title = `You clicked ${count} times`;
    }
    
});

  return(
    <Wrapper>
      <Button onClick={() => setCount(count + 1)}>Click me!</Button>
      <p>You clicked {count} times</p>
      </Wrapper>
  ) 
};

export default MyButton;

const Wrapper = styled.div`
  justify-items: center;

// const Button = styled.button`
//   padding: 12px 0;
//   width: 200px;
//   border: none;
//   border-radius: 30px;
//   color: white;
//   font-weight: bold;
//   font-family: Segoe UI, sans-serif;
// `;