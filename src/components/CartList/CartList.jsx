import { Typography, Button, Box, Container, Stack } from '@mui/material';
import styled from '@emotion/styled';
import CartItem from './CartItem/CartItem';
import { blue } from '@mui/material/colors';


const CartList = ({ cart, HandleEmptyCart, UpdateCart }) => {
    return (
        <Container>
            <Typography variant="h3">Your Shopping Cart</Typography>
            {
                cart?.total_items === 0 && <Typography variant="h5">Nothing to show in cart.</Typography>
            }
            {
                cart?.total_items > 0 && 
                    cart?.line_items.map(item => {
                        // console.log(item.name, item.price.formatted_with_symbol, item.quantity);
                        // console.log(subTotal)
                        return (
                            <Wrapper key={item.id}>
                                <CartItem 
                                    item={item}
                                    UpdateCart={UpdateCart}
                                />
                            </Wrapper>
                        );
                    })
                }
            {
               cart?.total_items > 0 && 
               <CartListFooter>
                    <Typography variant="h4">Subtotal: {cart.subtotal?.formatted_with_symbol} </Typography>
                    <div>
                        <Button onClick={HandleEmptyCart} variant="outlined">Empty Cart</Button>
                        <Button variant="contained" disableElevation={true}>Checkout</Button>
                    </div>
                </CartListFooter>
            }
        </Container>
    );
}
const Wrapper = styled(Stack)({
    border: '1px solid grey',
    padding: '1rem',
    margin: '2rem 0',
});

const CartListFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 2px solid red;
    h4{
        flex: 1;
    }
    div{
        // border: 2px solid black;
        flex: 0.3;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    margin-bottom: 10rem;
`;
export default CartList;