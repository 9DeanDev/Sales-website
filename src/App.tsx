import './App.css';
import BodyContent from './components/BodyContent';
import Header from './components/Header';
import ModalProduct from './components/Modal/ModalProduct';


function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <BodyContent />
      {/* <ModalProduct /> */}
    </div>
  );
}

export default App;
