import carro from '../imagens/carro.jpg';
import styled from "styled-components";

const Home = ()=>{
    return(
        <>
            <Carro src={carro}/>

            <p>
                carro muito lindw >B)
            </p>
        </>
    );
}

export default Home;

const Carro = styled.img`
width: 600px;
height: 400px;
`;