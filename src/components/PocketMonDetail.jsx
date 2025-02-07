import { useNavigate } from "react-router-dom";
import PokeDB from "../../PokeDB"
import styled from "styled-components";

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

export default function PocketMonDetail(){
    const navigate = useNavigate();
    const data = PokeDB;
    const id = location.search.slice(4);
    console.log(id);

   
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
            <button onClick={()=> navigate('/dex')}>뒤로가기</button>
        </>
    )
}
