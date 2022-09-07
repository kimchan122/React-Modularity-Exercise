import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavInit = styled.div`
    position: fixed;
    z-index: 100;
    padding-top: 30px;
    top: 30px;
`

export const Navi = styled.div`
    position: absolute;
    width: 100vw;
    top:0px;
    background: transparent;
    display: inline-flex;
    line-height: 60px;
    color: whitesmoke;
    justify-content: space-between; 
`

export const LogoTitle = styled.div`
    //margin-left: 120px;
    //padding-left: 10%;
    font-size: 3rem;
    font-weight: 900;
    color: black;
    width: 100%;
    display: block;
    white-space: nowrap;
`

export const NavContainerText = styled.nav`
    display: inline-block;
    vertical-align: middle;
    margin-right: 100px;
    font-size: 1.2rem;
    font-weight: 500;
`


export const Styledbutton = styled.button`
    display: flex;
    align-items: center;
    margin-right: 20px;
    background-color: transparent;
    border: none;
    font-weight:600;
    white-space: nowrap;
    color: #000000;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        color: #000000;
    }
`

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    margin-right: 20px;
    color: #000000;
    font-weight:600;
    white-space: nowrap;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        color: #000000;
    }
`

export const OffcanvasSNS = styled.div`
`