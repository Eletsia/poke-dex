import { createContext, useContext, useState } from "react";

// Context 생성
const PokemonContext = createContext();

// Provider 생성
export function PokemonProvider({ children }) {
  const dataLoad = JSON.parse(sessionStorage.getItem("pocket")) || [];
  const [mon, setMon] = useState(dataLoad);

  // 포켓몬 추가 함수
  function addPokeMon(e) {
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

  // 포켓몬 삭제 함수
  function removePokeMon(id) {
    var temp = mon.filter(e=>e.id !== id); // 지워진 데이터
    setMon(temp);
    sessionStorage.setItem("pocket",JSON.stringify(temp));
  }

  return (
    <PokemonContext.Provider value={{ mon, addPokeMon, removePokeMon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
