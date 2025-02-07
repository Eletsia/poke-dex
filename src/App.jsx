import { StrictMode, useState } from 'react'
import DashBoard from './components/Dashboard.jsx'
import PokemonList from  './components/PokemonList.jsx'
import './App.css'

function App() {
  const [mon,setmon] = useState([]);
  
  function AddPokeMon(e){
    if(mon.filter((mob)=> mob.id === e.id).length !== 0)
      alert("이미 등록된 포켓몬은 다시 등록할 수 없어요");
    else if(mon.length >= 6)
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
    else
      setmon([...mon,e]);
  }

  function RemovePokeMon(id){
    setmon(mon.filter(e=>e.id !== id));
    console.log(mon);
  }
  return (
    <StrictMode>
    <>
      <DashBoard
        Mon = {mon}
        RemovePokeMon = {RemovePokeMon}/>
      <PokemonList 
        AddPokeMon = {AddPokeMon}
        Mon = {mon}/>
    </>
    </StrictMode>
  )
}

export default App
