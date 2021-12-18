
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(()=>{
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xF1FeFEbD5be5E7Af4622d12Ee0594263e70760aE&order_direction=asc');
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])

  return (
    <div className='app'>
      <Header/>
      <PunkList punkListData={punkListData}/>
    </div>
  );
}

export default App;
