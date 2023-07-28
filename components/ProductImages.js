import { set } from "mongoose";
import { useState } from "react";
import { styled } from "styled-components";

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`;
const BigImage = styled.img`
    max-width:100%;
    max-height:200px;
`;
const BugImageWrapper = styled.div`
    text-align:center;
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top:10px;
`;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    height: 50px;
    padding: 2px;
    cursor: pointer;
    border-radius:5px;
    ${props => props.active ? `
        border-color: #ccc;
    ` : `
        border-color: transparent;
        z-index: 0;
    `}
`;

export default function ProductImages({images}){
    const [activeImage, setActiveImage] = useState(images?.[0]);

    return (
        <>
            <BugImageWrapper>
                <BigImage src={activeImage} alt="" />
            </BugImageWrapper>
            <ImageButtons>
                {images.map(image => (
                    <ImageButton 
                    key={image}
                    active={image === activeImage} 
                    onClick={()=> setActiveImage(image)}>
                        <Image src={image} alt=""/>
                    </ImageButton>
                ))}
            </ImageButtons>
        </>

    );
}