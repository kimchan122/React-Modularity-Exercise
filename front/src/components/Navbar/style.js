import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const NavInit = styled.div`
    position: absolute;
    z-index: 100;
`

export const Navi = styled.div`
    position: absolute;
    width: 100vw;
    top:0px;
    background: transparent;
    display: inline-flex;
    line-height: 120px;
    color: whitesmoke;
    justify-content: space-between;
    
`

export const LogoTitle = styled.div`
    margin-left: 120px;
    padding-left: 10%;
    font-size: 3rem;
    font-weight: 900;
    color: black;
    width: 100%;
    display: block;
`

export const NavContainerText = styled.nav`
    display: inline-block;
    vertical-align: middle;
    margin-right: 100px;
    font-size: 1.2rem;
    font-weight: 500;
`


export const StyledLink = styled(Link)`
    margin-top: 5px;
    margin-right: 20px;
    color: #000000;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        color: #000000;
    }
`

export const OffcanvasSNS = styled.div`
`