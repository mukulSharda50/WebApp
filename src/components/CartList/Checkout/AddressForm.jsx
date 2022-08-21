import {useForm, FormProvider} from 'react-hook-form';
import { Grid, Typography, Container, Button, FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import {Link} from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import styled from '@emotion/styled';

import InputField from './AdressFormInput';

import {commerce} from '../../../lib/commerce.js';

const types = {
    COUNTRIES: "COUNTRIES",
    COUNTRY: "COUNTRY",
    SUBDIVISIONS: "SUBDIVISIONS",
    SUBDIVISION: "SUBDIVISION",
    OPTIONS: "OPTIONS",
    OPTION: "OPTION",  
}

const reducer = (state, action) => {
    switch(action.type){
        case types.COUNTRIES:
            return {...state, countries: action.value}
        case types.COUNTRY:
            return {...state, country: action.value}
        case types.SUBDIVISIONS:
            return {...state, subdivisions: action.value}
        case types.SUBDIVISION:
            return {...state, subdivision: action.value}
        case types.OPTIONS:
            return {...state, options: action.value}
        case types.OPTION:
            return {...state, option: action.value}

        default:
            throw console.error("error");
    }
}

const initialState = {
    countries: [],
    country: "",
    subdivisions: [],
    subdivision: "",
    options: [],
    option: ""
}

const AddressForm = ({checkoutToken, submitData}) => {
    const methods = useForm();
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(methods.watch())
    const fetchShippingCountries = async () => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutToken.id);
        dispatch({type: types.COUNTRIES, value:countries});
    }
    const fetchShippingSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListShippingSubdivisions(checkoutToken.id, countryCode);
        dispatch({type: types.SUBDIVISIONS, value:subdivisions});
    }
    const handleChange = (type, event) => {
        dispatch({type: type, value: event.target.value});
    };
    
    useEffect(()=>{
        fetchShippingCountries();
    }, [])

    useEffect(()=>{
        if (state.country)fetchShippingSubdivisions(state.country);
    }, [state.country])
    
    return (
        <Container>
            <Typography variant="h5">Your Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit = {methods.handleSubmit((data)=>submitData({...data, country:state.country, subdivision:state.subdivision }))}>
                    <Grid container row={1} spacing={{xs: 3, lg: 4}}>   
                        <InputField name="name" label="Full Name" placeholder="Enter your full name" type="text" />
                        <InputField name="email" label="Email-id" placeholder="Enter your email" type="email"/>
                        <InputField name="phone" label="Phone Number" placeholder="Enter your phone number" type="tel"/>
                        <InputField name="address" label="Address" placeholder="Enter your address" type="text"/>
                        <InputField name="city" label="City " placeholder="Enter your city" type="text"/>
                        <InputField name="zip" label="ZIP / Postal Code" placeholder="Enter your zip code" type="text"/>
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                        <InputLabel>Countries</InputLabel>
                        <Select value={state.country} label="Countries" onChange={(e) => handleChange("COUNTRY", e)}>
                            {
                                Object.entries(state.countries).map((c)=>(
                                    <MenuItem key={c} value={c[0]}>{c[1]}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl> 
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                        <InputLabel>Subdivisions</InputLabel>
                        <Select value={state.subdivision} label="Subdivisions" onChange={(e) => handleChange("SUBDIVISION", e)}>
                            {
                                Object.entries(state.subdivisions).map((s)=>(
                                    <MenuItem key={s} value={s[1]}>{s[1]}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <BtnWrapper>
                        <Button component={Link} to="/" variant="outlined" >Back to cart</Button>
                        <Button variant="outlined" type="submit">Next</Button>
                    </BtnWrapper>
                </form>
            </FormProvider>
        </Container>


    );
}
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
export default AddressForm;