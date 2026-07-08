import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Events from './components/Events/Events';
import Help from './components/Help/Help';
import Registration from './components/Registration/Registration';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
    </Routes>
  </BrowserRouter>
)
