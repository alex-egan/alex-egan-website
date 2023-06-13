import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import {Resume} from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className='navbar-wrapper'>
          <NavBar></NavBar>
        </div>
      </header>
      <body>
        <Resume></Resume>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
