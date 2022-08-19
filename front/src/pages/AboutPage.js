import React from "react";
import Navbar from "../components/Navbar/index";
import BgOne from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img } from '../components/commons/BGContainer';
import { BGTextContainer, BGText } from '../components/commons/BGText';
import { BGBlank } from "../components/commons/BGBlank";
import { Fade } from 'react-awesome-reveal';
import ToTop from "../components/commons/ToTop";

const AboutPage = () => {
    return (
        <div className="App">
            <BGContainer className="home-sections">
                <BGContainer_Img src={BgOne}>
                    <BGTextContainer>
                        <Fade triggerOnce={true}>
                            <BGText>About Page</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>대충 소개글</BGText>
                        </Fade>
                    </BGTextContainer>
                </BGContainer_Img>
            </BGContainer>
            <BGContainer className="home-sections">
                <BGContainer_Img>
                    <BGTextContainer>
                        <Fade triggerOnce={true}>
                            <BGText>Contract Page</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>대충 소개글</BGText>
                        </Fade>
                    </BGTextContainer>
                </BGContainer_Img>
            </BGContainer>
        </div>
    )
}
export default AboutPage;