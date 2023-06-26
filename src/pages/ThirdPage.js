import React, { useState, useEffect } from 'react';
import MyTableTwo from '../services/MyTableTwo'
import MyTableThree from '../services/MyTableThree'
import GetAllData from '../services/Api'

export default function ThirdPage() {
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

  return(
    <MyTableTwo objects={shopData}/>
    // <MyTableThree/>
  )
}