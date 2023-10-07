import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

     <div className="App">      
      <NavBar/>
      <ItemListContainer greetings={'Bienvenidos a Creoqueteando Web'}/>

    </div>
  );
}
export default App;
