import styled from 'styled-components';
import Reactangle from 'react-rectangle'

export function Rectangle1(props) {
	return (
		<Reactangle>
			<div
				style={{
                    //display: 'inline-block',
                    Position: 'absolute',
					width: '400px',
					height: '400px',
                    marginLeft: '10vw',
                    marginTop: '250px',
					...props.style,
				}}
			/>
		</Reactangle>
	)
}

export function Rectangle2(props) {
	return (
        <Reactangle>
			<div
				style={{
                    position:'absolute',
                    display: 'inline-block',
					width: '300px',
					height: '300px',
                    marginTop: '150px',
                    marginLeft: '30.8vw',
					...props.style,
				}}/>
		</Reactangle>
	)
}

export function Rectangle3(props) {
	return (
		<Reactangle>
			<div
				style={{
                    position:'absolute',
                    display: 'inline-block',
                    top: '150px',
					width: '300px',
					height: '300px',
                    marginTop: '300px',
                    marginLeft: '30.8vw',
					...props.style,
				}}
			/>
		</Reactangle>
	)
}


export const BGContainer = styled.div`
    display: flex;
    height: 100vh;
    min-width:700px;
`
export const BGContainer_2 = styled.div`
    height: 100vh;
    min-width: 700px;
    position: relative;
    display: flex;
    padding-left : 20%;
    padding-right: 20%;
    flex-direction: column;
    justify-content: center;
    background-color: #f8f8f8;
`
export const BGContainer_3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #dfdfdf;
    //padding-bottom: 10%;
    min-height: 400px;
    height: auto;
    min-width: 700px;
    padding-top: 5%;
    padding-left : 20%;
    padding-right: 20%;
    padding-bottom: 5%;
`

export const BGContainer_4 = styled.div`
    min-height: 50px;
    height: 10vh;
    min-width: 700px;
    background-color: #d0d0d0;
`

export const BGWhiteContainer = styled.div`
    min-height: 500px;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
`

export const BGContainer_Img = styled.div`
    display: block;
    background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(${(props) => props.src});
    height: 100%;
    background-size: cover;
    background-position: center;
    align-items: center;
`

export const BGContainer_Img_Ca = styled.img`
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${(props) => props.src});
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`

export const BGContainer_Icon = styled.img`
    ${(props) => props.src};
    grid-row: 1/ span 3;
    max-width: 210px;
    max-height: 210px;
    margin-top: 20px;
`

export const BGContainerText = styled.div`
    display: inline;
    height: 100vw;
    color: 000000;
`

export const Gotop = styled.img`
    ${(props) => props.src};
    position: fixed;
    //justify-content: center;
    //float: right;
    width: 50px;
    height: 50px;
    bottom: 30px;
    right: 50px;
    z-index: 5;
    object-fit: cover;
`

export const Web3text = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 300px;
    padding-left : 20%;
    padding-right: 20%;
`