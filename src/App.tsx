import './App.css';
import BodyContent from './components/BodyContent';
import Header from './components/Header';
import ModalAccount from './components/Modal/ModalAccount';
import ModalProduct from './components/Modal/ModalProduct';


function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <BodyContent />
      {/* <ModalProduct /> */}
      <ModalAccount />
    </div>
  );
}

export default App;
