import { Controller, useFormContext } from "react-hook-form";
import { TextField, Grid } from "@mui/material";


const AddressFormInput = ({ name, label, placeholder, type}) => {
    const {control, register} = useFormContext();
    const inputField = () => (
        <TextField
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        variant="standard"
        {...register(name)}
        required
        fullWidth
      />
    );
    return (
        <Grid item xs={12} sm={6}>
            <Controller name={name} control={control}  render={inputField}/>
        </Grid>
    );
}
export default AddressFormInput;