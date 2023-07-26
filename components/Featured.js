import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-size: 3rem;
    font-weight: normal;
`;
const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;

    img{
        max-width: 100%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    gap: 10px;
`;


export default function Featured({product}){
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={"/products/"+product._id} white={1} outline={1} size="l">Read more</ButtonLink>
                                <Button white={1} size="l"><CartIcon />Add to cart</Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src={product.images[0]}></img>
                    </Column>
                </ColumnsWrapper>
                
            </Center>
        </Bg>
    );
}