import { Typography, Button, IconButton } from "@mui/material";
import styled from '@emotion/styled';

const CartItem = ({item, UpdateCart}) => {
    // console.log(item)
    return (
        <Wrapper>
            <div>
                <ImgWrapper>
                    <img src={item.image.url} alt={item.title} />
                </ImgWrapper>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h6" fontWeight={300}>{item.price.formatted_with_symbol}</Typography>
            </div>
            <CartItemActionBtns>
                <Button disableRipple={true} onClick={()=>UpdateCart(item.id, item.quantity+1)}><Typography variant="h5">+</Typography></Button>
                <Typography variant="h6">{item.quantity}</Typography>
                <Button disableRipple={true} onClick={()=>UpdateCart(item.id, item.quantity-1)}><Typography variant="h5">-</Typography></Button>
            </CartItemActionBtns>
        </Wrapper>
    );
}
const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ImgWrapper = styled.div `
    width: 10rem;
    height: 8rem;
    img {
        width: 100%;
        height: 100%;
    }
`;

const CartItemActionBtns = styled.div `
    display: flex;
    // justify-content: flex-end;
    align-items: center;
    min-width: 20%;
    Button{
        background: lightgrey;
        color: white;
        padding: 0.1rem 0.6rem;
        border: none;
    }
    Button:hover{
        background: grey;
        color: inherit;
    }
    h6{
        // flex: 1;
        margin: 0 auto;
        // border: 2px solid red;
    }
`;


export default CartItem;