import { primary } from "@/lib/colors";
import { styled, css } from "styled-components";

export const ButtonStyle = css`
    border:0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items:color-interpolation-filters;
    text-decoration:none;
    font-weight:600;

    svg{
        height:16px;
        margin-right: 5px;
    }

    ${props => props.white && !props.outline && css`
        background-color:#fff;
        color:#000;
        border: 1px solid #fff;
    `}
    ${props => props.white && props.outline && css`
        background-color:transparent;
        color:#fff;
        border: 1px solid #fff;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        svg{
            height:20px;
        }
    `}
    ${props => props.primary && !props.outline && css`
        background-color: ${primary};
        color: #fff;
        border: 1px solid ${primary};
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        color: ${primary};
        border: 1px solid ${primary};
    `}
`;

const StyledBtn = styled.button`
    ${ButtonStyle}
`;

export default function Button({children,...rest}){
    return (
        <StyledBtn {...rest}>{children}</StyledBtn>
    );
}