import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
const columns = [
    {
        title: 'NO.',
        dataIndex: 'number',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Name',
        dataIndex: 'label',
        filters: [
            {
                text: 'cafe',
                value: 'cafe'
            },
            {
                text: 'ข้าว',
                value: 'ข้าว'
            }
        ],
        sorter: (a, b) => a.name.length - b.name.length,
    }
];


const MyTableTwo = ({objects}) =>{
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 5,
          total: 30
        },
      });

    const setShopObjectToArray = (shop) => {
        return {
          key: shop?.tag_id,
          number: shop?.tag_id,
          label: shop?.tag_name
        }
      }
    
      const shopArray = [];
      const shops = objects;
      shops.map((item) => {
        const shopObject = setShopObjectToArray(item);
        shopArray.push(shopObject);
      })
    
      console.log(shopArray)

      const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          ...sorter,
        });
      };
      
    return(
        <Table 
        columns={columns} 
        dataSource={shopArray} 
        pagination={tableParams.pagination}
        onChange={handleTableChange}
        />
    )
    
} ;
export default MyTableTwo;