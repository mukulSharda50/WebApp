import { Typography, Stepper, Step, StepLabel, Button, Container, Paper, CircularProgress} from "@mui/material";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import {commerce} from '../../../lib/commerce';

const checkoutSteps = ["Add address details", "Payment details"];


const Confirmation = ()=>(
    <>Confirmation</>
)

const Checkout = ({ cart }) => {
    const [active, setActive] = useState(0);
    const [checkoutToken, setcheckoutToken] = useState(null);
    const [checkoutTokenExpired, setcheckoutTokenExpired] = useState(false);
    const [shippingData, setShippingData] = useState({});
    
    useEffect(()=>{
        const generateToken = async ()=>{
            try{
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                // console.log(token)
                setcheckoutToken(token)
            }catch (error){
                setcheckoutTokenExpired(true);
            }
        }
        generateToken()
    }, [])
    
    function submitData(data){
        setShippingData(data)
        setActive((prev) => prev + 1);
    }
    console.log(shippingData);
    const Form = ()=>(
        <>
            {
                active === 0 ? 
                   <AddressForm checkoutToken={checkoutToken} submitData={submitData}/> :
                    <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} />
            }
        </>
    )
    return (
        <Container sx={{display: 'flex', justifyItems: 'center', alignItems:'center'}}>
        <Wrapper>
            <Stepper activeStep={active} alternativeLabel sx={{marginBottom: '4rem', flex: 1}}>
                {
                    checkoutSteps.map(step => {
                        return (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        );
                    })
                }
            </Stepper>
            <FormWrapper >
                {
                    active === checkoutSteps.length ? 
                        < Confirmation /> :
                        (checkoutToken ? <Form />: (checkoutTokenExpired ? <p>Error! Please try again</p>: <CircularProgress />))
                }
               
            </FormWrapper>
        </Wrapper>
        </Container>
    );
}

const Wrapper = styled(Paper)({
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
    // border: '5px dotted grey'
});

const FormWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    minHeight: '30vh',
    // border: '2px solid red'
});
export default Checkout;