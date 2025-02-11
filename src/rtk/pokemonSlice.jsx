import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

// sessionStorage에서 초기 값 불러오기기
const initialState = {
  mon: JSON.parse(sessionStorage.getItem("pocket")) || [],
};


const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokeMon: (state, action) => {
      const isExist = state.mon.some((mob) => mob.id === action.payload.id);
      if (isExist) {
        alert("이미 등록된 포켓몬은 다시 등록할 수 없어요.");
      } else if (state.mon.length >= 6) {
        alert("포켓몬은 최대 여섯개까지만 선택할 수 있어요.");
      } else {
        state.mon.push(action.payload);
        sessionStorage.setItem("pocket", JSON.stringify(state.mon));
      }
    },
    removePokeMon: (state, action) => {
      state.mon = state.mon.filter((e) => Number(e.id) !== Number(action.payload));
      sessionStorage.setItem("pocket", JSON.stringify(state.mon));
    },
  },
});

export const { addPokeMon, removePokeMon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
