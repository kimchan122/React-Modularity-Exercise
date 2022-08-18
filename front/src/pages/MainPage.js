import React from "react";
import Navbar from "../components/Navbar/index";
import BG01 from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img } from '../components/commons/BGContainer';
import {BGText} from '../components/commons/BGText';

const MainPage = () => {
    return (
        <div className="App">
            <BGContainer>
                <BGContainer_Img src={(BG01)} />
                <BGText>대충 멋진글</BGText>
            </BGContainer>
            <BGContainer>
                <BGContainer_Img src={(BG01)} />
                <BGText>대충 멋진소개</BGText>
            </BGContainer>
            <BGContainer>
                <BGContainer_Img src={(BG01)} />
                <BGText>대충 멋진성과</BGText>
            </BGContainer>
        </div>
    )
}
export default MainPage;