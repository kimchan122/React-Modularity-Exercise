import styled from 'styled-components';
import Reactangle from 'react-rectangle'

export function Rectangle1(props) {
	return (
        //yellow
		<Reactangle aspectRatio={[10, 0]}>
			<div
				style={{
                    position:'absolute',
                    display: 'inlin-block',
					width: '400px',
					height: '400px',
                    marginLeft: '30%',
                    marginTop: '30vh',
					...props.style,
				}}
			/>
		</Reactangle>
	)
}

export function Rectangle2(props) {
	return (
        //sky
        <Reactangle aspectRatio={[70, 2]}>
			<div
				style={{
                    position:'absolute',
                    display: 'inline-block',
					width: '300px',
					height: '300px',
                    marginTop: '21vh',
					...props.style,
				}}/>
		</Reactangle>
	)
}

export function Rectangle3(props) {
	return (
        //green
		<Reactangle aspectRatio={[70,2]}>
			<div
				style={{
                    position:'absolute',
                    display: 'inline-block',
                    top: '150px',
					width: '300px',
					height: '300px',
                    marginTop: '30vh',
					...props.style,
				}}
			/>
		</Reactangle>
	)
}


export const BGContainer = styled.div`
    min-height: 600px;
    height: 100vh;
`
export const BGContainer_2 = styled.div`
    min-height: 600px;
    height: 100vh;
    //display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #f8f8f8;
`
export const BGContainer_3 = styled.div`
    min-height: 400px;
    height: 90vh;
    //display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #dfdfdf;
`

export const BGContainer_4 = styled.div`
    min-height: 50px;
    height: 10vh;
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
    display: inline-flex;
    ${(props) => props.src};
    max-width: 210px;
    max-height: 210px;
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

