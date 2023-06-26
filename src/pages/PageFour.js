import React, { useState, useEffect } from 'react';
import MyTableTwo from '../services/MyTableTwo'
import MyTableFour from '../services/MyTableFour'
import GetAllData from '../services/ApiTwo'

export default function PageFour() {
  const [tableData, setTableData] = useState([])

    const getData = async () => {
        const dataArray = [];
        const data = await GetAllData();
        if (data) {
            const datas = data;
            datas.map(async (item) => {
                dataArray.push(item);
            })
        }
        console.log(dataArray)
        setTableData(dataArray)
        console.log("finish")

    }

    useEffect(() => {
        getData()

    }, [])

  return(
     <MyTableFour objects={tableData}/>
  )
}