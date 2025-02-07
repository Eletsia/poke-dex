import { StrictMode } from 'react';
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeDB from '../../PokeDB'

const PokeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    justify-items: center;
`;

// 카드가 담겨있는 컴포넌트
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