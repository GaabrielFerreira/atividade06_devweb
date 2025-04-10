import React from 'react';

const CepResult = ({ address }) => {
  return (
    <div className="cep-result">
      <h3>Resultado:</h3>
      <ul>
        <li><strong>CEP:</strong> {address.cep}</li>
        <li><strong>Logradouro:</strong> {address.logradouro}</li>
        <li><strong>Complemento:</strong> {address.complemento || 'N/A'}</li>
        <li><strong>Bairro:</strong> {address.bairro}</li>
        <li><strong>Cidade:</strong> {address.localidade}</li>
        <li><strong>Estado:</strong> {address.uf}</li>
      </ul>
    </div>
  );
};

export default CepResult;