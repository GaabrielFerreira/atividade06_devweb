import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './pages/TodoList';
import ClickCounter from './pages/ClickCounter';
import TicTacToe from './pages/TicTacToe';
import Calculator from './pages/Calculator';
import CepFinder from './pages/CepFinder';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/contador" element={<ClickCounter />} />
            <Route path="/velha" element={<TicTacToe />} />
            <Route path="/calculadora" element={<Calculator />} />
            <Route path="/cep" element={<CepFinder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;