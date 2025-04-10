import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Atividade06 DevWeb</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              To-Do List
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contador" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contador
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/velha" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Jogo da Velha
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/calculadora" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Calculadora
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cep" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Buscador CEP
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;