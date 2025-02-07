import { StrictMode, useState } from 'react'
import DashBoard from './components/Dashboard.jsx'
import PokemonList from  './components/PokemonList.jsx'
import './App.css'

export default function App() {
  var dataLoad = [];
  if(sessionStorage.getItem("pocket")!== null)
    dataLoad = JSON.parse(sessionStorage.getItem("pocket"));

  const [mon,setMon] = useState(dataLoad);

  // 포켓몬을 추가합니다
  function addPokeMon(e){
    var temp; // 추가 데이터를 위한 임시 배열
    if(mon.filter((mob)=> mob.id === e.id).length !== 0)
      alert("이미 등록된 포켓몬은 다시 등록할 수 없어요");
    else if(mon.length >= 6)
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
    else{
      temp = [...mon,e];
      setMon(temp);
      sessionStorage.setItem("pocket",JSON.stringify(temp));
    }
  }
  // 포켓몬을 지웁니다
  function removePokeMon(id){
    var temp = mon.filter(e=>e.id !== id); // 지워진 데이터
    setMon(temp);
    sessionStorage.setItem("pocket",JSON.stringify(temp));
  }

  return (
    <StrictMode>
    <>
      <DashBoard
        mon = {mon}
        removePokeMon = {removePokeMon}/>
      <PokemonList 
        addPokeMon = {addPokeMon}
        mon = {mon}/>
    </>
    </StrictMode>
  )
}


