import { useNavigate } from 'react-router-dom';
import PokeDB from '../../PokeDB'
import styled from "styled-components";

const PokeCard = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
width:100%;
height: 100%;
margin-bottom: 20px;
background-color : aqua;
border-radius: 10px;
`;
const Card = styled.div ` 
width : 150px;
height : 225px;
background-color: magenta;
border-radius : 10px;
margin-bottom : 10px;
`;

const SelectButton = styled.button`
width : 100px;
height : 40px;
text-align:center;
margin-top: 15px;
font-size: 15px;
`;
export default function PokemonCard({
    AddPokeMon
}){
    const data = PokeDB;
    const navigate = useNavigate();
    return (
        <>
            <PokeCard>
                {data.map((e) => 
                    <Card> 
                        <div onClick = {() => navigate('/detail?id='+e.id)}>
                            <img src = {e.img_url}/>
                            <div>{e.korean_name}</div>
                            <div>No.{e.id}</div>
                        </div>
                        <SelectButton onClick = {()=> AddPokeMon(e)}>
                        추가</SelectButton>
                    </Card>
                )}
            </PokeCard>
        </>
    )

}
