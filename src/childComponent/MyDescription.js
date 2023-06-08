import React from 'react'
import styled from "styled-components"

// const MyDescription = ({text}, {number}) => {
//   if(number === 0){
//     console.log(number)
//     return <Description>Your text is {text}</Description>
//   }
//   else{
//     return <Description>this is case 2 {number}</Description>
//   }
// }

const MyDescription = ({text, ifTest}) => {
  console.log("Des = " + ifTest)
  if(ifTest){
    return <Description>Your text is {text}</Description>
  }
  else{
    return <Description>This is false</Description>
  }
  
}

export default MyDescription

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;