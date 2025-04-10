import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Atividade06 DevWeb!</h2>
      <p>Selecione uma das funcionalidades no menu acima para começar.</p>
      <div className="features-grid">
        <div className="feature-card">
          <h3>To-Do List</h3>
          <p>Gerencie suas tarefas diárias</p>
        </div>
        <div className="feature-card">
          <h3>Contador de Cliques</h3>
          <p>Conte quantas vezes você clicou</p>
        </div>
        <div className="feature-card">
          <h3>Jogo da Velha</h3>
          <p>Divirta-se com o clássico jogo</p>
        </div>
        <div className="feature-card">
          <h3>Calculadora</h3>
          <p>Faça cálculos simples</p>
        </div>
        <div className="feature-card">
          <h3>Buscador de CEP</h3>
          <p>Encontre endereços por CEP</p>
        </div>
      </div>
    </div>
  );
};

export default Home;