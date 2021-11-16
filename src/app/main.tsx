import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globals.css';
import App from './App';
import Documents from './pages/Documents/Documents';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="documents" element={<Documents />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
