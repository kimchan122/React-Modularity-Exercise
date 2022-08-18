import React from "react";
import Navbar from "../components/Navbar/index";
import BG01 from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img } from '../components/commons/BGContainer.js'

const MainPage = () => {
    return (
        <div className="App">
            <BGContainer>
                <BGContainer_Img src={(BG01)} />
            </BGContainer>
            <BGContainer>
                <BGContainer_Img src={(BG01)} />

            </BGContainer>
            <BGContainer>
                <BGContainer_Img src={(BG01)} />

            </BGContainer>
        </div>
    )
}
export default MainPage;