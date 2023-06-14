import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from './pages/Layout'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstPage/>} />
          <Route path="SecondPage" element={<SecondPage />} />
          <Route path="ThirdPage" element={<ThirdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}