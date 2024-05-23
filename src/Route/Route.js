import { Route, Routes } from 'react-router-dom';
import React from 'react';
import {TrangChu} from '../pages/TrangChuPages/trangchu.js';
import {Login} from '../pages/LoginPages/login.js';

export const RoutesAdmin = () => {
    return<>
    {
        <Routes>
              <Route path='/' element={<TrangChu />} />
              <Route path='/Login' element={<Login/>}/>
        </Routes>
    }
      
    
    </>
}
