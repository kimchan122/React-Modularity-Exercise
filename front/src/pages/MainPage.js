import React from "react";
import Navbar from "../components/Navbar/index";
import BG01 from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_Img } from '../components/commons/BGContainer';
import { BGText } from '../components/commons/BGText';
import { BGBlank } from "../components/commons/BGBlank";
import Fade from 'react-reveal/Fade';

const MainPage = () => {
    return (
        <div className="App">
            <BGContainer>
                <BGContainer_Img src={(BG01)}>
                    {/* <BGBlank></BGBlank> */}
                    <BGText>
                        <Fade bottom>
                            <div>asdf</div>
                        </Fade>
                        <Fade bottom>
                            대충 멋진 말
                        </Fade>
                    </BGText>
                </BGContainer_Img>
            </BGContainer>
            <BGContainer>
                <BGContainer_Img src={(BG01)}>
                    {/* <BGBlank></BGBlank> */}
                    <BGText>
                        <Fade bottom>
                            대충
                        </Fade>
                        <Fade bottom>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;멋진
                        </Fade>
                        <Fade bottom>
                            목표&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Fade>
                    </BGText>
                </BGContainer_Img>
            </BGContainer>
        </div>
    )
}
export default MainPage;