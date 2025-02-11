import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removePokeMon } from "../rtk/pokemonSlice";

const DBoard = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(6,1fr);
    justify-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 15px;
    background-color : wheat;
    margin-left : -20px;
`;

const Card = styled.div`
    width : 150px;
    height : 225px;
    background-color: #eeeee9;
    border-radius : 10px;
    margin-bottom : 10px;
    margin-right : 10px;
    box-shadow : 2px 2px 2px 2px gray;
`;

const DeleteButton = styled.button`
    width : 100px;
    height : 40px;
    text-align:center;
    margin-top: 15px;
    font-size: 15px;
`;

export default function DashBoard() {
    const mon = useSelector((state) => state.pokemon.mon);
    const dispatch = useDispatch();

    return (
        <>
             <h1>나만의 포켓몬</h1>
            <DBoard>
                {mon.map((e) => 
                    <Card>
                        <img src = {e.img_url}/>
                        <div>{e.korean_name}</div>
                        <div>No.{e.id}</div>
                        <DeleteButton onClick= {() => dispatch(removePokeMon(e.id))}>
                            삭제</DeleteButton>
                    </Card>
                )}
            </DBoard>
            </>
    )
}

