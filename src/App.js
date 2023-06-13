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
      shops.map(async (item) => {
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
      <WrapperTwo>
        <Background src={backgroundImage} alt="background" />
        <MyDropdown objects={shopData} />
        {/* <MyDescription text={text} ifTest={ifTest} /> */}
        <MyCard />
      </WrapperTwo>
      <MyTable />
    </Wrapper>


  );
}

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
`;

const WrapperTwo = styled.div`
  padding-top: 150px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;