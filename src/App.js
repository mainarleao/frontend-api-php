import './App.css';
import "./style.css";
import Header from './components/header';
import Routes from './routes.js';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <nav id="main-nav">
            <ul>
              <li>
                <Link className="menu" to={`/`}>
                  <i className="material-icons">beach_access</i>
                    Home
                </Link>
              </li>

              <li>
                <Link className="menu" to={`/register-client`}>
                  <i className="material-icons">person_add</i>
                    Cadastro
                </Link>
              </li>

              <li>
                <Link className="menu" to={`/reservation`}>
                  <i className="material-icons">content_paste</i>
                    Reservas
                </Link>
              </li>

              <li>
                <Link className="menu" to={`/list-client`}>
                  <i className="material-icons">import_contacts</i>
                    Consultar
                </Link>
              </li>

              <li>
                <Link className="menu" to={`/gallery`}>
                  <i className="material-icons">image</i>
                    Galeria
                </Link>
              </li>

              <li>
                <Link className="menu" to={`/contact`}>
                  <i className="material-icons">contact_phone</i>
                    Contato
                </Link>
              </li>

              <li>
                <Link className="menu" to={`/about`}>
                  <i className="material-icons">message</i>
                    Sobre
                </Link>
              </li>
            </ul>
          </nav>
          <Routes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
