import React, { useState } from "react";
import styled from "styled-components";

import backgroundImage from "./childComponent/background.png";
import MyCard from "./childComponent/Card";
import MyDescription from "./childComponent/MyDescription";

export default function Prop() {

  const [text, setText] = useState("Hello Aungpor World")
  const [ifTest, setIfTest] = useState(true)

  console.log("Prop " + ifTest)

  return (
    
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title>Props</Title>
      <MyDescription text={text} ifTest={ifTest} />
      <MyCard />
    </Wrapper>
  );

}

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
