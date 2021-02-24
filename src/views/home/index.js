import React, {Component } from 'react';
import Routes from './../../routes';
import { BrowserRouter, Link } from 'react-router-dom';
import "./style.css";
import Jaguaribe from './../../img/Jaguaribe-Lodge-Kite.jpg'
import Serhs from './../../img/Serhs_Grand_Hotel_Natal.png'
import Spazio from './../../img/Spazio_Marine_Hotel_-Cleverson_dos_Reis.jpg'
import Tivoli from './../../img/Tivoli-Ecoresort-Praia-do-Forte-Brazil.png'


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Bem Vindo</h1>

        <p>Seja bem vindo ao Sunshine web, aqui voce localiza todo os hoteis e resortes da rede Sunshine. <br />Espalhados pelas praias de todo Brasil os hoteis da rede Sunshine ja ganharam 5 premios de melhores do ramo.</p>

        <div className="img">
          <h2>Confira alguns de nossos hoteis:</h2>
          <p>Sunshine Serhs Hotel & Resort (Natal, RN)</p>

          <p>E se a busca for não apenas por um hotel de praia, mas sim por um resort no Nordeste? O Serhs Natal, entre as praias de Ponta Negra e Areia Preta, pode ser a pedida. O hotel oferece o Serhs Inclusive, uma espécie de all inclusive mais limitado. A estrutura não decepciona: quatro piscinas, cinco restaurantes, parque infantil e quadra de tênis.</p>
          <Link className="reserva" to={`/register-client`}><img className="jaguaribe" src={Serhs}/></Link>
        </div>

        <div className="img">
          <p>Sunshine Spazio Hotel (Guaratuba, PR)</p>
          <p>O hotel está localizado em Guaratuba, no litoral paranaense, a 120 Km de Curitiba. O que diferencia esse de outros hotéis de frente para o mar é a minicozinha presente em todos os quartos. A área de lazer conta com duas piscinas externas, piscina aquecida, espaço kids, quadra de vôlei e sala de jogos.</p>
            <Link className="reserva" to={`/register-client`}><img className="jaguaribe" src={Spazio}/></Link>
        </div>

        <div className="img">
          <p>Sunshine Tivoli Ecoresort (Praia do Forte, BA)</p>
          <p>A Praia do Forte já costuma ser ponto de parada das viagens em família por conta do Projeto Tamar. Que tal se hospedar por lá também? O Tivoli, resort 5 estrelas que funciona no sistema de meia pensão, tem infraestrutura de primeira. São sete piscinas, dois bares, três restaurantes e academia, além de atividades recreativas e esportivas para as crianças.</p>
            <Link className="reserva" to={`/register-client`}><img className="jaguaribe" src={Tivoli}/></Link>
        </div>

        <div className="img">
          <p>Sunshine Jaguaribe (Fortim, CE)</p>
          <p>E se a busca for não apenas por um hotel de praia, mas sim por um resort no Nordeste? O Serhs Natal, entre as praias de Ponta Negra e Areia Preta, pode ser a pedida. O hotel oferece o Serhs Inclusive, uma espécie de all inclusive mais limitado. A estrutura não decepciona: quatro piscinas, cinco restaurantes, parque infantil e quadra de tênis.</p>
          <em>*fonte: https://www.skyscanner.com.br/noticias/melhores-hoteis-na-praia</em>
            <Link className="reserva" to={`/register-client`}><img className="jaguaribe" src={Jaguaribe}/></Link>
        </div>

        <div className="covid">
          <p>Informamos que devido a pandemia causa pelo covid-19 nossos hoteis estão com reservas limitadas.<br /><br />
          Fique atento aos meios de prevenção:<br /><br />
          *Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%.<br />
          *Ao tossir ou espirrar, cubra nariz e boca com lenço ou com a parte interna do cotovelo.<br />
          *Não tocar olhos, nariz, boca ou a máscara de proteção fácil com as mãos não higienizadas.<br />
          *Mantenha distância mínima de 1 (um) metro entre pessoas em lugares públicos e de convívio social.<br />
          *Higienize com frequência o celular, brinquedos das crianças e outro objetos que são utilizados com *frequência.<br />
          *Recomenda-se a utilização de máscaras em todos os ambientes.  As máscaras de tecido (caseiras/artesanais), não são Equipamentos de Proteção Individual (EPI), mas podem funcionar como uma barreira física, em especial contra a saída de gotículas potencialmente contaminadas.<br />
          </p>
        </div>

      </div>
    )
  }
}