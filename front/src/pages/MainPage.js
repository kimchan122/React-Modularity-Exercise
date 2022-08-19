import React from "react";
import Navbar from "../components/Navbar/index";
import BgOne from "../assets/bg01.jpeg";
import BgTwo from "../assets/bg02.jpeg";
import BgThree from "../assets/bg03.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img, BGContainer_Img_Ca } from '../components/commons/BGContainer';
import { BGText, BGTextContainer } from '../components/commons/BGText';
import { BGBlank } from "../components/commons/BGBlank";
import { Fade } from 'react-awesome-reveal';
import { Slide } from "react-awesome-reveal";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { MainCarousel } from "../components/maincompo/MainCarousel";

const MainPage = () => {
    return (
        <div className="App">
            
            <MainCarousel/>

            <BGContainer>
                <BGContainer_Img src={BgTwo}>
                    <BGTextContainer>
                        <Fade triggerOnce={true}>
                            <BGText>멋진</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>문구</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>세 줄</BGText>
                        </Fade>
                    </BGTextContainer>
                </BGContainer_Img>
            </BGContainer>
            <BGContainer>
                <BGContainer_Img src={BgThree}>
                    <BGTextContainer>
                        <Fade triggerOnce={true}>
                            <BGText>멋진</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>문구</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>서너줄</BGText>
                        </Fade>
                    </BGTextContainer>
                </BGContainer_Img>
            </BGContainer>
        </div>
    )
}
export default MainPage;