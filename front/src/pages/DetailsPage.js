import React from "react";
import Navbar from "../components/Navbar/index";
import BgOne from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img, BGWhiteContainer } from '../components/commons/BGContainer';
import { BGTextContainer, BGText } from '../components/commons/BGText';
import { BGBlank } from "../components/commons/BGBlank";
import { Fade } from 'react-awesome-reveal';
import { ParticipatedCards } from "../components/details/ParticipatedCards";

const DetailsPage = () => {
    return (
        <div className="App">
            <BGContainer>
                <BGContainer_Img src={BgOne}>
                {/* <BGBlank></BGBlank> */}
                    <BGTextContainer>
                        <Fade triggerOnce={true}>
                            <BGText>Details Page</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>약력 소개하는곳</BGText>
                        </Fade>
                        <Fade triggerOnce={true}>
                            <BGText>아직 공사중</BGText>
                        </Fade>
                    </BGTextContainer>
                </BGContainer_Img>
            </BGContainer>

            <BGWhiteContainer>
                {/* <BGContainer_Img> */}
                    {/* <BGTextContainer> */}
                    {/* </BGTextContainer> */}
                {/* </BGContainer_Img> */}
                <ParticipatedCards/>
            </BGWhiteContainer>
        </div>
    )
}
export default DetailsPage;