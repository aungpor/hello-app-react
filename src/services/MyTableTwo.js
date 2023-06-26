import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'cafe',
        value: 'cafe',
      },
      {
        text: 'ข้าว',
        value: 'ข้าว',
      }
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: '50%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
];


const MyTableTwo = ({objects}) =>{
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 5
          },
    })
    const setShopObjectToArray = (shop) => {
        return {
          key: shop?.tag_id,
          age: shop?.tag_id,
          name: shop?.tag_name
        }
      }
    
      const shopArray = [];
      const shops = objects;
      shops.map((item) => {
        const shopObject = setShopObjectToArray(item);
        shopArray.push(shopObject);
      })
      console.log(shopArray)

      const onChange = (pagination, filters, sorter) => {
        setTableParams({pagination, filters, sorter})
        console.log('params', pagination, filters, sorter);
      };

    return(
        <Table 
        columns={columns} 
        dataSource={shopArray} 
        pagination={tableParams.pagination}
        onChange={onChange} />
    )
    
} 
export default MyTableTwo;