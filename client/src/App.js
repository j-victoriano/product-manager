import './App.css';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import Update from './components/Update';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route element={<Main/>} path="/" default />
              <Route element={<OneProduct/>} path="/product/:id" />
              <Route element={<Update/>} path="/product/edit/:id" />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
