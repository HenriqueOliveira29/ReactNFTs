
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
      <CollectionCard id={0} traits={{'value': 7}} name={'Bandana Punk'} img={""}/>
    </div>
  );
}

export default App;
