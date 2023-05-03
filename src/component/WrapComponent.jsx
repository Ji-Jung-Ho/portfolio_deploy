import React from 'react';
import MainPageComponent from './MainPageComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KurlyTeamProject from './projectComponent/KurlyTeamProject';
import KurlyReactProject from './projectComponent/KurlyReactProject';
import MyPortfolioProject from './projectComponent/MyPortfolioProject';

export default function WrapComponent() {

  return (
    <div id="wrap">
      {
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<HeaderComponent/>}/> */}
            <Route path='/' element={<MainPageComponent/> }/>
            <Route path='/project01' element={<KurlyTeamProject/> }/>
            <Route path='/project02' element={<KurlyReactProject/> }/>
            <Route path='/project03' element={<MyPortfolioProject/> }/>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
};