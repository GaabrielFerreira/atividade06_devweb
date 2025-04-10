import React, { useState } from 'react';
import CepResult from '../components/CepResult';

const CepFinder = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCep = async () => {
    if (!cep || cep.length !== 8) {
      setError('CEP deve ter 8 dígitos');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError('Erro ao buscar CEP');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchCep();
    }
  };

  return (
    <div className="cep-container">
      <h2>Buscador de CEP</h2>
      <div className="cep-input">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          placeholder="Digite o CEP (apenas números)"
          maxLength="8"
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchCep} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      
      {error && <div className="cep-error">{error}</div>}
      
      {address && <CepResult address={address} />}
    </div>
  );
};

export default CepFinder;