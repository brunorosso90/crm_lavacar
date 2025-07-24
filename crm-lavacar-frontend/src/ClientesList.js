// src/ClientesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClientesList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Erro ao buscar clientes:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente._id}>{cliente.nome} - {cliente.telefone}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientesList;