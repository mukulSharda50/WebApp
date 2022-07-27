import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, Box, Container, Button } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { blueGrey } from '@mui/material/colors';
import styled from '@emotion/styled';


const Navbar = () => {
    return (
        <Wrapper>
            <Nav>
                <Logo>
                    <PaletteIcon fontSize='large'/>
                    <Typography variant="h4" fontWeight={400}>Inks & Colors</Typography>
                </Logo>
                <CartBtn disableRipple={false} startIcon={<ShoppingCartIcon />} aria-label='Go to cart'>Cart</CartBtn>
            </Nav>
        </Wrapper>
    )
}

const BtnBgColor = blueGrey;

const Wrapper = styled(Container)`
    padding-top: 1rem;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 2px solid red;
`;
const Logo = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0.8);
    transition: 0.3s ease;
    cursor: pointer;
    color: white;
    &:hover{
        transform: scale(1);
    }
    // border: 2px solid black;
`;

const CartBtn = styled(Button)({
    backgroundColor: BtnBgColor[600],
      color: '#fff',
      padding: '0.6rem 2rem',
      '&:hover': {
        backgroundColor: BtnBgColor[800],
        color: 'white',
    }
});
      

export default Navbar;