import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/student/View';
import Edit from './components/student/Edit';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
