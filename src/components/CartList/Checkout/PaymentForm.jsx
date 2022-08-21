import { Typography, Button, Divider } from "@mui/material";
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from  './Review';

const PaymentForm = ({shippingData, checkoutToken}) => {
    // console.log(checkoutToken)
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            
        </>
    );
}
export default PaymentForm;