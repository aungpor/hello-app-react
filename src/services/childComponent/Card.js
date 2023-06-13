import React from "react";
import styled from "styled-components";
import MyButton from "./Button";

const MyCard = () => {
  return (
    <Wrapper>
      <Title>Hello Aungpor World</Title>
      The button should be active
      <MyButton/>
    </Wrapper>
  );
};

export default MyCard;

// Style your card
const Wrapper = styled.div`
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6);
  border-radius: 30px;
  padding: 20px;
  width: 300px;
  display: grid;
  gap: 30px;
  justify-items: center;
  align-items: center;
  font-family: Segoe UI, sans-serif;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  text-align: center;
`;