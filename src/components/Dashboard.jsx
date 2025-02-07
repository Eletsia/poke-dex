import { StrictMode } from 'react';
import styled from "styled-components";
import PokeDB from '../../PokeDB'
const DBoard = styled.div`
   display:grid;
   grid-template-columns: repeat(6,1fr);
   justify-items: center;
   margin-bottom: 20px;
`;

const Card = styled.div`
    width : 150px;
    height : 225px;
    background-color: aqua;
    border-radius : 10px;
    margin-bottom : 10px;
    margin-right : 10px;
`;

const DeleteButton = styled.button`
    width : 100px;
    height : 40px;
    text-align:center;
    margin-top: 15px;
    font-size: 15px;
`;

export default function DashBoard({
    RemovePokeMon,
    Mon}) {
    //const [poke,setPoke] = useState();

    return (
        <>
             <h1>나만의 포켓몬</h1>
            <DBoard>
                {Mon.map((e) => 
                    <Card>
                        <img src = {e.img_url}/>
                        <div>{e.korean_name}</div>
                        <div>No.{e.id}</div>
                        <DeleteButton onClick= {() => RemovePokeMon(e.id)}>
                            삭제</DeleteButton>
                    </Card>
                )}
            </DBoard>
            </>
    )
}

