import { useNavigate } from "react-router-dom";
import PokeDB from "../../PokeDB"
import styled from "styled-components";
import { removePokeMon,addPokeMon } from "../rtk/pokemonSlice";
import { Provider, useSelector, useDispatch } from "react-redux";
import {store} from "../rtk/store"

const TypeColor = styled.div`
    color:black;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const MonImg = styled.img`
    width:450px;
    height: 450px;
`;

const Name = styled.div`
    font-size: 50px;
    color: red;
`;

const Button = styled.button`
    width : 100px;
    height : 40px;
    text-align:center;
    margin-top: 15px;
    font-size: 15px;
`;

function PocketMonDetailComp(){
    var DataLoad;
    const navigate = useNavigate();
    const data = PokeDB;
    const id = location.search.slice(4); // query id 값을 가져오기위해 슬라이싱
    var functionName = "추가";
    const mon = useSelector((state) => state.pokemon.mon);
    const dispatch = useDispatch();
    if(sessionStorage.getItem("pocket")!== null){
        DataLoad = JSON.parse(sessionStorage.getItem("pocket"));

        if(DataLoad.find((e) => Number(e.id) === Number(id)) === undefined)
            functionName = "추가";
        else
            functionName = "삭제";
    }
    

    return (
        <>  
            <div>
                {data.filter((e)=> e.id == id).map((e) => 
                    <div>
                        <MonImg src = {e.img_url}/>
                        <Name>{e.korean_name}</Name>
                        <TypeColor>타입 : {e.types}</TypeColor>
                        <div>{e.description}</div>
                    </div>
                )}
            </div>
            <Button onClick={()=> navigate('/dex')}>뒤로가기</Button>
            <Button onClick={(text)=>{ 
                let temp;
                if(text.target.innerText === "삭제"){
                    //sessionStorage.setItem("pocket",JSON.stringify(temp));
                    dispatch(removePokeMon(id));
                    navigate("/dev");
                }
                else{
                    //sessionStorage.setItem("pocket",JSON.stringify(temp));
                    dispatch(addPokeMon(...PokeDB.filter((e) => Number(e.id) === Number(id))));
                }
                navigate('/dex');
            }
            }>{functionName}</Button>
        </>
    )
}

export default function PocketMonDetail(){
    return(
        <Provider store = {store}>
            <PocketMonDetailComp />
        </Provider>
    )
}


