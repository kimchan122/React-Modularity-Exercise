import styled, {keyframes} from 'styled-components'

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Nav = styled.div`
    position: fixed;
    top:0px;
    left:0px;
    height: 64px;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.7250384024577573) 0%, rgba(0,0,0,0) 100%);
    animation: ${boxFade} 2s 1s linear alternate;
`

export const LogoTitle = styled.div`
    float: left;
    //display: inline-block;
    vertical-align: middle;
    text-align: left;
    margin-left: 30px;
    margin-right: 30px;
    flex-direction: column;
    height: 64px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 64px;
`

export const NavContainer = styled.nav`
    
    float: right;
    justify-content: center;
`

export const NavElement = styled.div`
    display: inline-block;
    vertical-align: middle;
    line-height: 64px;
    justify-content: center;
    margin-left: 15px;
    margin-right: 15px;
`

export const MarginRight = styled.div`
    display: inline-block;
    margin-right: 15px;
`