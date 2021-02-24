import React, { Component } from 'react';
import api from '../../services/api.js';
import './style.css';
import { Link } from 'react-router-dom';

export default class ListClient extends Component {

  state = {
    client: [],
  };

  componentDidMount() {
    this.loadClient();
  }

  loadClient = async () => {
    const response = await api.get("/client");
    this.setState({client: response.data['client']});
  }

  render() {

    const { client } = this.state;

    return (
      <div className="conteudo-list">
        <h1>Lista de Clientes Cadastrados</h1>
        <div className="client-list">
          {client.map(client => (
            <article key={client.id}>
              <p>
                <strong>Codigo:</strong> {client.id}<br />
                <strong>Nome:</strong> {client.firstName} {client.lastName}<br />
                <strong>E-mail:</strong> {client.email}<br />
                <strong>Celular:</strong> {client.cellphoneNumber}
              </p>
              <Link className="link" to={`/detail-client/${client.id}`}>Ver Detalhes</Link>
            </article>
          ))}
        </div>
        <p className="quantidade">Total de clientes Cadastrados {client.length}</p>
      </div>
    );
  }
}