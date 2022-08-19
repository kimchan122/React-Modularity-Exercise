import styled from 'styled-components';

export const BGContainer = styled.div`
    height: 100vh;
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