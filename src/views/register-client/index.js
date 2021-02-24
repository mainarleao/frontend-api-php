import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class RegisterClient extends Component {

  constructor(props) {
    super(props);

    this.state = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        cellphone_number: "",
        birthdate: "",
        CPF: "",
        RG: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.registerClient();
  }

  registerClient = async () => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

    await api.post('/client', this.state, headers)
    .then(response => {
      alert("cliente cadastrado");
    })
    .catch(error => {
      alert("erro ao cadastrar cliente");
    });
  };

  render() {
    return (
      <div className="conteudo">
        <h1>Cadastro</h1>

        <p>
          Faça seu cadastro em nossa rede de hoteis
        </p>

        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Nome:</label>
              <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Sobrenome:</label>
            <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>E-mail:</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Telefone:</label>
            <input name="phone_number" type="text" value={this.state.phone_number} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Celular:</label>
            <input name="cellphone_number" type="text" value={this.state.cellphone_number} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Data de nascimento:</label>
            <input name="birthdate" type="date" value={this.state.birthdate} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>CPF:</label>
            <input name="CPF" type="text" value={this.state.CPF} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>RG:</label>
            <input name="RG" type="text" value={this.state.RG} onChange={this.handleInputChange}/>
          </div>

          <input type="submit" value="Cadastrar" />

        </form>
        <p>
          *caso não seja feita uma reserva em ate 48 horas com este cadastro, ele sera excluido
        </p>
      </div>
    );
  }
}