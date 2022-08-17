import React from "react";
import Navbar from "../components/Navbar/index";
import BG01 from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer } from '../components/commons/BGContainer.js'

const MainPage = () => {
    return (
        <div>
            <BGContainer>
            <img src={BG01} style={{ position: 'absolute', left: '0px', top:'0px', width: '100vw', height: '100vh', zIndex: '-10'}} />
            
            </BGContainer>
        </div>
    )
}
export default MainPage;