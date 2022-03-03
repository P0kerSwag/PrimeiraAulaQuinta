import React from "react";
import './navbar.css';
import mafalda from '../imagens/mafalda.jpg';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <Mafalda src={mafalda}/>
            <Link class="navbar-brand" to="/">Home</Link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current></a>
                </li>
                <li class="nav-item">
                  <Link to="youtube" class="nav-link">Youtubekkkk</Link>
                </li>
                <li class="nav-item">
                  <Link to="discord" class="nav-link">Discord</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;

const Mafalda = styled.img`
width: 80px;
height: 80px;
`;