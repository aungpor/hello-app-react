import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import GetAllData from './Api'
import MyDropdown from './MyDropdown'
import backgroundImage from "./childComponent/background.png";
import MyCard from "./childComponent/Card";
import MyDescription from "./childComponent/MyDescription";
import MyTable from './MyTable';

export default function App() {

  const [shopData, setShopData] = useState([])
  const [text, setText] = useState("Hello Aungpor World")
  const [ifTest, setIfTest] = useState(true)

  const getShop = async () => {
    const shopArray = [];
    const data = await GetAllData();
    if (data) {
      const shops = data;
      shops.map(async(item) => {
        shopArray.push(item);
      })
    }
    console.log(shopArray)
    setShopData(shopArray)
    
  }

  useEffect(() => {
    getShop()
    
  }, [])

  return (

    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title>Hello Aungpor World</Title>
      <MyDropdown objects = {shopData} />
      {/* <MyDescription text={text} ifTest={ifTest} /> */}
      <MyCard />
      <MyTable/>
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