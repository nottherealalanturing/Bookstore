import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Books, Category } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Books />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
