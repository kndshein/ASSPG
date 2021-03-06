import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutPage from './pages/AboutPage';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
