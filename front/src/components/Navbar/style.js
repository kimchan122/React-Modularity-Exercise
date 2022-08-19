import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavInit = styled.div`
    position: fixed;
    z-index: 100;
`

export const Navi = styled.div`
    position: fixed;
    min-width: 250px;
    top:0px;
    left:0px;
    height: 64px;
    width: 100%;
    background: rgb(20,20,20,0.5);
    backdrop-filter: blur(10px);
    display: inline-block;
    line-height: 64px;
    color: whitesmoke;
    //filter: blur(5px);
    //background: linear-gradient(180deg, rgba(0,0,0,0.7250384024577573) 0%, rgba(0,0,0,0) 100%);
`

export const LogoTitle = styled.div`
    position: absolute;
    vertical-align: middle;
    text-align: left;
    margin-left: 30px;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 500;
    /* line-height: 64px; */
    color: whitesmoke;
`

export const NavContainer = styled.nav`
    float: right;
    justify-content: center;
    margin-right: 30px;
`

export const NavContainerText = styled.nav`
    position: fixed;
    top: -8px;
    right: 0;
    float: right;
    justify-content: center;
    margin-right: 30px;

`

export const NavElement = styled.div`
    display: inline-block;
    vertical-align: middle;
    line-height: 64px;
    justify-content: center;
    margin-left: 15px;
    margin-right: 15px;
    color: whitesmoke;
`

export const MarginRight = styled.div`
    display: inline-block;
    margin-right: 15px;
`

export const StyledLink = styled(Link)`
    margin-top: 5px;
    margin-right: 20px;
    color: #AAAAAA;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        color: #000000;
    }
`