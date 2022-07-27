import { Card, CardMedia, CardActions, Typography, CardContent, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from "@emotion/styled";

const Product = ({id, title,description, image, price, HandleAddtoCart})=> {
    const stripedHtml = description.replace(/<[^>]+>/g, '');
    return (
        <CardItem>
            <CardImage component="img" alt={title} image={image}/>
            <CardContent>
                <Typography variant="h6" fontWeight={500}>{title}</Typography>
                <Typography variant="body1" gutterBottom>{stripedHtml}</Typography>
                <Typography variant="body1" >{price}</Typography>
            </CardContent>
            <CardActions>
                <IconButton disableRipple={true} onClick={() => HandleAddtoCart(id, 1)}>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </CardItem>
    );
}
const CardItem = styled(Card)({
    minHeight: "300px",
    width: "320px",
    // border: "2px solid red",
});

const CardImage = styled(CardMedia)({
    height: "240px",
    width: "100%",
});

export default Product;