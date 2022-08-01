import {useForm, FormProvider} from 'react-hook-form';
import { Grid, Typography, Container } from "@mui/material";
import { useReducer } from 'react';

import InputField from './AdressFormInput';

const AddressForm = () => {
    const methods = useForm();
    return (
        <Container>
            <Typography variant="h5">Your Shipping Address</Typography>
            <FormProvider {...methods}>
                <form>
                    <Grid container row={1} spacing={{xs: 3, lg: 4}}>
                        <InputField name="name" label="Full Name" placeholder="Enter your full name" type="text"/>
                        <InputField name="email" label="Email-id" placeholder="Enter your email" type="email"/>
                        <InputField name="phone" label="Phone Number" placeholder="Enter your phone number" type="tel"/>
                        <InputField name="address" label="Address" placeholder="Enter your address" type="text"/>
                        <InputField name="city" label="City " placeholder="Enter your city" type="text"/>
                        <InputField name="zip" label="ZIP / Postal Code" placeholder="Enter your zip code" type="text"/>
                    </Grid>
                </form>
            </FormProvider>
        </Container>


    );
}
export default AddressForm;