import styled from 'styled-components';

export const BGContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
`

export const BGContainer_Img = styled.img.attrs({alt: 'background image'})`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    object-fit: cover; 
    background-size: contain;
`