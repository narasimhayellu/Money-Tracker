import { Box, Button, TextField } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const SpendingForm = ({addSpend})=>{
    const [amount,setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const onHandleSubmit = (e)=>{
        e.preventDefault();
        if (!amount || !category || !date) return;
        addSpend({ id: uuidv4(), amount, category, date });
        setAmount('');
        setCategory('');
        setDate('');
        enqueueSnackbar("Details added successfully",{variant:"success"})
    }

    return(
        <Box onSubmit = {onHandleSubmit} component="form">
            <TextField required label="Amount" type="number" value={amount} margin="normal"
            onChange={(e)=> setAmount(e.target.value)} fullWidth />
            <TextField required label="Category" value={category} margin="normal"
            onChange={(e)=> setCategory(e.target.value)} fullWidth/>
            <TextField required  type="date" value={date} margin="normal"
            onChange={(e)=> setDate(e.target.value)} fullWidth/>
            <Button type="submit" variant="contained" fullWidth>
                Add spending
            </Button>
        </Box>
    )
}

export default SpendingForm;