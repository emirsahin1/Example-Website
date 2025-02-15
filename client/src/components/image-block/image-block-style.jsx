import styled, { css } from "styled-components"
import {device} from "../../device-sizes"

/**The container for the image. Takes in a required animate property which animates on true.*/
export const ImageContainer = styled.div`
    float:right;
    width: 40vw;
    height: 40vw;
    min-width: 330px;
    min-height: 330px;
    max-height: 500px;
    max-width: 500px;
    right:0px;
    transform: translateX(500px);
    background-color:#00000000;
    overflow: hidden;
    margin: 0px 6%;
    box-shadow: 30px 20px 50px rgba(0,0,0,0.4);
    transition: transform 0.85s ease, opacity 1.7s ease-out;
    opacity: 0;
    flex-shrink:0;

    ${props => {
        if (props.animateImage) {
            return css`
        transform: translateX(0px);
        opacity: 100;
        `
        }
    }}

    @media ${device.mobile}{
        width: 80vw;
        height: 80vw;
        min-width: 0;
        min-height: 0;
    }
`


export const BlockImage = styled.img`

    max-width:auto;
    max-height:100%;
    
`
/**The container can take an optional side prop which determines the side the image is rendered on.*/ 
export const Container = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    flex-direction:${props => props.side === "left" ? "row" : "row-reverse"}; 
    margin-top: 100px;
    margin-bottom: 50px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.mobile}{
    width:100%;
    flex-direction: column;
    margin-top:0px;
    margin-bottom:0px;
    }

    &:after {
    content: " "; 
    display: block;
    clear: both;
    }`




