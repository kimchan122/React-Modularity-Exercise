import React from "react";
import Navbar from "../components/Navbar/index";
import BgOne from "../assets/bg01.jpeg";
import BgTwo from "../assets/bg02.jpeg";
import BgThree from "../assets/bg03.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img } from '../components/commons/BGContainer';
import { BGText, BGTextContainer } from '../components/commons/BGText';
import { BGBlank } from "../components/commons/BGBlank";
import { Fade } from 'react-awesome-reveal';
import '../App.css';

const MainPage = () => {
    return (
        <div className="App">
            <BGContainer>
                <BGContainer_Img src={BgOne}>
                    {/* <BGBlank></BGBlank> */}
                    <BGTextContainer>
                        <Fade triggerOnce={true}>
                            <BGText>asdfasdfasdf</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>대충 멋진 말</BGText>
                        </Fade>
                    </BGTextContainer>
                </BGContainer_Img>
            </BGContainer>
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
                    {/* <BGBlank></BGBlank> */}
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