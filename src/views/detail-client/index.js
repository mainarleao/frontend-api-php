import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class DetailClient extends Component {

  state = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    cellphone_number: "",
    birthdate: "",
    CPF: "",
    RG: ""
  };

  constructor(props) {
    super(props);

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
    this.updateClient();
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/client/${id}`);
    this.setState({
      id:id,
      first_name: response.data.first_name,
      last_name: response.data.last_name,
      email: response.data.email,
      phone_number: response.data.phone_number,
      cellphone_number: response.data.cellphone_number,
      birthdate: response.data.birthdate,
      CPF: response.data.CPF,
      RG: response.data.RG
    });
  }

  deleteClient = async () => {
    const { id } = this.state;
    const response = await api.delete(`/client/${id}`);
    if (response.status === 200) {
      alert("cliente excluido com sucesso");
      this.props.history.push('/list-client');
    }
  }

  updateClient = async () => {
    await api.put('/client', this.state)
    .then(response => {
      alert("Cliente alterado com sucesso");
      this.props.history.push('/list-client');
    })
    .catch(error => {
      alert("Erro ao alterer o cliente");
    })
  }

  render() {

    const { id, first_name, last_name, email, phone_number, cellphone_number, birthdate, CPF, RG } = this.state;

    return (
      <div className="detail-client">
        <h1>Maiores Informações</h1>
        <h2>Cliente: {first_name} {last_name}</h2>
        <p>
        <strong>Codigo:</strong> {id}<br />
        <strong>E-mail:</strong> {email}<br />
        <strong>Telefone:</strong> {phone_number}<br />
        <strong>Celular:</strong> {cellphone_number}<br />
        <strong>Data de Nascimento:</strong> {birthdate}<br />
        <strong>CPF:</strong> {CPF}<br />
        <strong>RG:</strong> {RG}<br />
        <button onClick={() => this.deleteClient()}>
          Excluir Cliente
        </button>
        </p>


        <h2>Alterar dados do Cliente</h2>

        <form onSubmit={this.handleSubmit}>

          <div>
            <label>Digite o seu Nome:</label>
              <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite o seu sobrenome:</label>
            <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite o seu E-mail:</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite o numero de telefone:</label>
            <input name="phone_number" type="text" value={this.state.phone_number} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite o numero celular:</label>
            <input name="cellphone_number" type="text" value={this.state.cellphone_number} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite a sua data de nascimento:</label>
            <input name="birthdate" type="date" value={this.state.birthdate} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite o seu CPF:</label>
            <input name="CPF" type="text" value={this.state.CPF} onChange={this.handleInputChange}/>
          </div>

          <div>
          <label>Digite o seu RG:</label>
            <input name="RG" type="text" value={this.state.RG} onChange={this.handleInputChange}/>
          </div>

          <input type="submit" value="Alterar" />

        </form>

      </div>
    );
  }
}