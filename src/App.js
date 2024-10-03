import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="home" pageSize={9} />} />
          <Route path="/business" element={<News key="business" pageSize={9} category="business" />} />
          <Route path="/science" element={<News key="science" pageSize={9} category="science" />} />
          <Route path="/health" element={<News key="health" pageSize={9} category="health" />} />
          <Route path="/sports" element={<News key="sports" pageSize={9} category="sports" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
