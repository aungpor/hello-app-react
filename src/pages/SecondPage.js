import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import backgroundTwo from "../assets/images/backgroundTwo.jpg";

const SecondPage = () => {
    return (
        <div>
            <Midground>
                <DivOne><p>Hello Page 2</p></DivOne>
                <DivOne><p>Hello Page 2</p></DivOne>
            </Midground>
        </div>
    )
}

const Midground = styled.div`
background: rgba(255, 255, 255, 0.8);
box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6);
border-radius: 30px;
padding-top: 60px;
padding-bottom: 400px;
margin-top: 120px;
align-items: center;
justify-items: center;
`;

const DivOne = styled.div`
background: rgba(106, 90, 205, 0.8);
box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6);
border-radius: 30px;
float:left;
width:300px;
height:250px;
position: relative;
border: 10px;
text-align:center;

`;

const DivTest = styled.div`
    float:left;
    width:200px;
    height:100px;
    position: relative;
    border: 10px;
    text-align:center;
    align-items: center;
    justify-items: center;
`;

export default SecondPage