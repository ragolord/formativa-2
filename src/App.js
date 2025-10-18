import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import InformacionPrincipal from './components/informacion';
import Banner from './components/banner';

function App() {
  return (
    <div className="text-center mt-2">
      <Titulo />
      <InformacionPrincipal />
      <Banner />
      
    </div>

  );


    
}

export default App;
