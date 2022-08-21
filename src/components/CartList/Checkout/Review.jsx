import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Review = ({checkoutToken}) => {
    console.log(checkoutToken)
    return (
        <div style={{width: '60%'}}>
            <Typography variant="h4" gutterBottom>Order Summary</Typography>
            <List >
                {checkoutToken.line_items.map(item => (
                    <ListItem key={item.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                            <ListItemText primary={
                                <>
                                    <Typography variant="h6">
                                        {item.name}
                                    </Typography>
                                </>
                            } 
                            secondary={`Quantity: ${item.quantity}`}
                            />
                        <ListItemText primary={item.price.formatted_with_symbol}/>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6">Total: {checkoutToken.total.formatted_with_symbol}</Typography>
        </div>
    )
}
export default Review;