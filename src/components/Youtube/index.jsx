import youtube from '../imagens/youtube.jpg';
import styled from "styled-components";

const Youtube = ()=>{
    return(
        <>
            <Youtubeimg src={youtube}/>
        </>
    );
}

export default Youtube; 

const Youtubeimg = styled.img`
width: 500px;
height: 500px;
`;