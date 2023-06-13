import React, { useState, useEffect } from 'react';
import GetAllData from './Api'
import MyDropdown from './MyDropdown'

export default function App() {

  const [shopData, setShopData] = useState([])

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
    <div>
      shop List:
      <MyDropdown objects = {shopData} />
    </div>
    
  );
}