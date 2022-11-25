import '../App.css';
import Navbar from './Navbar/navbar';
import ItemListContainer from './ItemListContainer/itemListContainer';

function App() {
  return (

    <div className="App">
      <header className="">
        <Navbar/>
      </header>
        <ItemListContainer greeting={"Hola, buenas tardes"}/>
    </div>
  );
}

export default App;
