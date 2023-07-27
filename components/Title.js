import { styled } from "styled-components";

const StyledTitle = styled.h1`
    font-size:1.5em;
`;

export default function Title({children}){
    return (
        <StyledTitle>{children}</StyledTitle>
    );
}