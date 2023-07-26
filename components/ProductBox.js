import { styled } from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 10px;

    img{
        max-width: 100%;
        max-height: 80px;
    }
`;
const ProductWrapper =styled.div`
`;
const Title = styled(Link)`
    font-weight:normal;
    font-size:.9rem;
    margin:0;
    color: inherit;
    text-decoration:none;
`;
const ProductInfoBox = styled.div`
    margin-top: 5px;
`;
const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:2px;
`;
const Price = styled.div`
    font-size:1.5rem;
    font-weight: 600;
`;

export default function ProductBox({_id,title,description,price,images}){
    return(
        <ProductWrapper>
            <WhiteBox href={"/product/"+_id}>
                <div>
                    <img src={images[0]}/>  
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={"/product/"+_id}>{title}</Title>
                <PriceRow>
                    <Price>   
                        {price}€
                    </Price>
                    <Button primary={1} outline={1}>Add to cart</Button>
                </PriceRow>
                
            </ProductInfoBox>
        </ProductWrapper>
    );
}