import { StrictMode } from 'react';
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeDB from '../../PokeDB'

const PokeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    justify-items: center;
`;


export default function PokemonList({
    addPokeMon,
    mon
}) {
    return (
        <strictMode>
            <PokeList>
               <PokemonCard 
                addPokeMon = {addPokeMon}
                mon = {mon}/>
            </PokeList>
        </strictMode>
    )
}