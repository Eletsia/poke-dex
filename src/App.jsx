import { StrictMode } from "react";
import DashBoard from "./components/Dashboard.jsx";
import PokemonList from "./components/PokemonList.jsx";
import { PokemonProvider } from "./context/PokemonContext";
import PokemonCard from "./components/PokemonCard.jsx";
import "./App.css";


export default function App() {
  return (
    <StrictMode>
      <PokemonProvider>
        <DashBoard />
        <PokemonList />
      </PokemonProvider>
    </StrictMode>
  );
}
