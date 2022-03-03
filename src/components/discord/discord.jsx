import discord from '../imagens/discord.png';
import styled from "styled-components";

const Discord = ()=>{
    return(
        <>
            <Discordimg src={discord}/>

            <p>
                Segue o link do meu grupo pra ajudar :) https://discord.gg/fbK66T366e
            </p>
        </>
    );
}

export default Discord; 

const Discordimg = styled.img`
width: 300px;
height: 300px;
`;