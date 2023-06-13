import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Select  } from 'antd';
import React from 'react';

const MyDropdown = ({ objects }) => {

  const setShopObjectToArray = (shop) => {
    return {
      key: shop?.tag_id,
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

  return (
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={shopArray}
  />

  );
}


// const MyDropdown = ({ objects }) => {
//   return (
//     <div>
//       <ul>
//         {objects.map((item) => (
//           <li key={item.tag_id}>{item.tag_name}</li>
//         ))}
//       </ul>
//     </div>

//   );
// }
export default MyDropdown;