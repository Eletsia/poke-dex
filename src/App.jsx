import { StrictMode } from "react";
import DashBoard from "./components/Dashboard.jsx";
import PokemonList from "./components/PokemonList.jsx";
import { Provider } from "react-redux";
import store from "./rtk/store.js"
import "./App.css";


export default function App() {
  return (
    <StrictMode>
      <Provider store = {store}>
        <DashBoard />
        <PokemonList />
      </Provider>
      </StrictMode>
  );
}
