import {Container, Grid} from '@mui/material';
import styled from '@emotion/styled'
import Product from './Product/Product'

const ProductList = ({ data, HandleAddToCart })=>{
    return (
        <Wrapper>
            <Grid container rowSpacing={5} columnSpacing={{xs:2, sm:4, md:6, lg:12}}>
                {
                    data.map(item => {
                        return (
                            <Grid key={item.id} item>
                                <Product id={item.id} title={item.name} description={item.description} price={item.price.formatted_with_symbol} image={item.image.url} HandleAddtoCart={HandleAddToCart} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin: 1rem 5rem 0 5rem;
    // border: 2px solid red;
`;
// const ListGrid = styled(Grid)({
//     width: '100%',
//     flexWrap: 'wrap',
//     gap: '30px',
//     border: '2px solid red',
// });

export default ProductList;