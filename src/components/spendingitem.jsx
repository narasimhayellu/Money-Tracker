import { useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { enqueueSnackbar } from 'notistack';

const SpendingItem = ({delSpend,updSpend,spending})=>{
    if (!spending) return null;
    const [isEditing, setIsEditing] = useState(false);
    const [edited, setEdited] = useState(spending || { amount: '', category: '', date: '' });

    const onHandleSave = ()=> {
        const updatedSpending = {
            ...spending,
            amount: edited.amount,
            category: edited.category,
            date: edited.date
          };
    updSpend(updatedSpending);
    enqueueSnackbar("Updated successfully", {variant:"success"} )
    setIsEditing(false);
  };
    return(
        <ListItem
      secondaryAction={
        isEditing ? (
          <IconButton edge="end" onClick={onHandleSave}>
            <SaveIcon />
          </IconButton>
        ) : (
          <>
            <IconButton edge="end" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => delSpend(spending.id)}>
              <DeleteIcon/>
            </IconButton>
          </>
        )
      }
    >
      {isEditing ? (
        <Box display="flex" flexDirection="column" width="100%">
          <TextField
            label="Amount"
            type="number"
            margin="dense"
            value={edited.amount}
            onChange={(e) => setEdited({ ...edited, amount: e.target.value })}
          />
          <TextField
            label="Category"
            margin="dense"
            value={edited.category}
            onChange={(e) => setEdited({ ...edited, category: e.target.value })}
          />
          <TextField
            label="Date"
            type="date"
            margin="dense"
            InputLabelProps={{ shrink: true }}
            value={edited.date}
            onChange={(e) => setEdited({ ...edited, date: e.target.value })}
          />
        </Box>
      ) : (
        <ListItemText
          primary={`₹${spending.amount} - ${spending.category}`}
          secondary={new Date(spending.date).toLocaleDateString()}
        />
      )}
    </ListItem>
    )
}

export default SpendingItem;