import { Typography, Stepper, Step, StepLabel, Button, Container, Paper} from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';


const checkoutSteps = ["Add address details", "Payment details"];


const Confirmation = ()=>(
    <>Confirmation</>
)

const Checkout = () => {
    const [active, setActive] = useState(0);

    const Form = ()=>(
        <>
            {
                active === 0 ? 
                    <AddressForm /> :
                    <PaymentForm />
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
                        <Form />
                }
               <BtnWrapper>
                    <Button  variant="outlined" onClick={() => setActive(active <= 0 ? 0 : active - 1)}>Back</Button>
                    <Button variant="outlined" onClick={() => setActive(active + 1)}>Next</Button>
               </BtnWrapper>
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

const BtnWrapper = styled.div ({
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5rem',
    // marginLeft: '10rem'
    // padding: '0 2rem',
    // margin: '2rem 1rem',
    // border: '2px solid black'
});
export default Checkout;