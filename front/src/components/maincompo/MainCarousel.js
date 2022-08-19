import React from "react";
import BgOne from "../../assets/bg01.jpeg";
import BgTwo from "../../assets/bg02.jpeg";
import BgThree from "../../assets/bg03.jpeg";
import { BGContainer, BGContainer_Img, BGContainer_Img_Ca } from '../../components/commons/BGContainer';
import { Fade } from 'react-awesome-reveal';
import Carousel from 'react-bootstrap/Carousel';

export const MainCarousel = () => {
    return (
        <BGContainer>
            <BGContainer_Img>
                <Carousel>
                    <Carousel.Item>
                        <BGContainer>
                            <BGContainer_Img_Ca src={BgOne} />
                        </BGContainer>
                        <Carousel.Caption>
                            <Fade>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Fade>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <BGContainer>
                            <BGContainer_Img_Ca src={BgTwo} />
                        </BGContainer>
                        <Carousel.Caption>
                            <Fade>
                                <h3>Second slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Fade>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <BGContainer>
                            <BGContainer_Img_Ca src={BgThree} />
                        </BGContainer>
                        <Carousel.Caption>
                            <Fade>
                                <h3>Third slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Fade>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </BGContainer_Img>
        </BGContainer>
    )
}