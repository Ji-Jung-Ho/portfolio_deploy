import React from 'react';
import MainPageComponent from './MainPageComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project01Component from './projectDetail/Project01Component';

export default function WrapComponent() {

  return (
    <div id="wrap">
      {
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<HeaderComponent/>}/> */}
            <Route path='/' element={<MainPageComponent/> }/>
            <Route path='/project01' element={<Project01Component/> }/>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
};