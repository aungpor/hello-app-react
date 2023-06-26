import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/main.css";
import styled from "styled-components";
import Layout from './pages/Layout'
import Main from './components/Main'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'
import PageFour from './pages/PageFour'


export default function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<FirstPage/>} />
    //       <Route path="SecondPage" element={<SecondPage />} />
    //       <Route path="ThirdPage" element={<ThirdPage />} />
    //       <Route path="PageFour" element={<PageFour />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FirstPage />} />
            <Route path="SecondPage" element={<SecondPage />} />
            <Route path="ThirdPage" element={<ThirdPage />} />
            <Route path="PageFour" element={<PageFour />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Main>
  );
}