import { useNavigate } from 'react-router-dom';
import PokeDB from '../../PokeDB'
import styled from "styled-components";

const PokeCard = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    width:100%;
    height: 100%;
    padding: 20px;
    background-color : wheat;
    border-radius: 10px;
`;
const Card = styled.div ` 
    width : 150px;
    height : 225px;
    background-color: #eeeee9;
    border-radius : 10px;
    margin-bottom : 10px;
    margin-right : 10px;
    box-shadow : 2px 2px 2px 2px gray;
`;

const SelectButton = styled.button`
    width : 100px;
    height : 40px;
    text-align:center;
    margin-top: 15px;
    font-size: 15px;
`;
// 아랫쪽 하단부 카드를 만드는 컴포넌트
export default function PokemonCard({
    addPokeMon
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
                        <SelectButton onClick = {()=> addPokeMon(e)}>
                        추가</SelectButton>
                    </Card>
                )}
            </PokeCard>
        </>
    )

}
