import styled from 'styled-components';

export const BGContainer = styled.div`
    height: 100vh;
`

export const BGWhiteContainer = styled.div`
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
`

export const BGContainer_Img = styled.div`
    display: block;
    background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(${(props) => props.src});
    height: 100%;
    /* overflow: hidden; */
    background-size: cover;
    background-position: center;
    align-items: center;
`

export const BGContainer_Img_Ca = styled.img`
    /* display: block; */
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${(props) => props.src});
    width: 100vw;
    height: 100vh;
    /* background-size: cover; */
    /* background-position: center; */
    /* align-items: center; */
    object-fit: cover;
`