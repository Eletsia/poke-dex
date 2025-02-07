import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    return (
    <>
        <div>시작할거임?</div>
        <button onClick = {()=>{
            navigate('/dex')
        }}>가보자구구</button>
    </>
)};