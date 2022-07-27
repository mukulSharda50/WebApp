import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, Box, Container, IconButton, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PaletteIcon from '@mui/icons-material/Palette';
import styled from '@emotion/styled';


const Navbar = ({totalCartItems}) => {
    return (
        <Wrapper>
            <Nav>
                <NavLinkStyle to="/">
                    <Logo>
                        <PaletteIcon fontSize='large'/>
                        <Typography variant="h4" fontWeight={400}>Inks & Colors</Typography>
                    </Logo>
                </NavLinkStyle>
                <NavLinkStyle to="/cart">
                    <CartBtn disableRipple={true} disableTouchRipple={true} aria-label='Go to cart'>
                        <Badge badgeContent={totalCartItems} color="primary">
                            <ShoppingCartIcon fontSize='large'/>
                        </Badge>
                    </CartBtn>
                </NavLinkStyle>
            </Nav>
        </Wrapper>
    )
}

const NavLinkStyle =styled(NavLink)({
    textDecoration: "none",
});

const Wrapper = styled.div`
    padding: 1rem 4rem 0 4rem;
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

const CartBtn = styled(IconButton)({
      color: '#fff',
      borderRadius: '50%',
      '&:hover': {
        color: 'white',
    }
});
      

export default Navbar;