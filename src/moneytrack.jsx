import { useEffect, useState } from 'react'
import './moneytrack.css'
import { Box, Button, Container, Typography } from '@mui/material';
import SpendingForm from './components/spendingform';
import Search from './components/search';
import SpendingList from './components/spendinglist';

const MoneyTrack = ()=>{
  const [spendings, setSpendings] = useState(()=>{
    return JSON.parse(localStorage.getItem('spendings')) || [];
  })

  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

useEffect(()=>{
  localStorage.setItem("spendings", JSON.stringify(spendings))
},[spendings])

const addSpending = (spending)=>{
  setSpendings([...spendings, spending]);
}

const updateSpending = (updated)=>{
  setSpendings(spendings.map(s=>s.id === updated.id ? updated : s))
}

const deleteSpending = (id) =>{
  setSpendings(spendings.filter(s=>s.id !== id))
}

const filterSpending = spendings.filter(s => {
  const spendingDateObj = new Date(s.date);
  const spendingDate = spendingDateObj.toISOString().split('T')[0];
  const now = new Date();

  if (showAll) {
    return true; 
  }
  
  const isThisMonth = spendingDateObj.getMonth() === now.getMonth() && spendingDateObj.getFullYear() === now.getFullYear();

  if (!search) {
    return isThisMonth;
  }

  return spendingDate === search;
});

const totalSpending = filterSpending.reduce((sum,s)=>sum + Number(s.amount),0);

return (
  <Container className='container'>
    <div>
    <Typography variant='h3' gutterBottom align='center'>Money Tracker</Typography>
    <SpendingForm addSpend={addSpending}/>
    </div>

    <div className='mt-5'>
    <Search search={search} setSearch={setSearch}/>
    <Button
  variant="outlined"
  fullWidth
  sx={{ my: 2 }}
  onClick={() => setShowAll(true)}
>
  Show All Spendings
</Button>
<Button
  variant="contained"
  color="secondary"
  fullWidth
  sx={{ mb: 2 }}
  onClick={() => { setShowAll(false); setSearch(''); }}
>
  Show Current Month
</Button>
    <SpendingList updSpend ={updateSpending} delSpend={deleteSpending} filterSpend={filterSpending}/>
    <Box mt={4} p={2} bgcolor="#e3f2fd" borderRadius={2} textAlign="center">
  <Typography variant="h5" fontWeight="bold" color="primary">
    Total Spendings This Month
  </Typography>
  <Typography variant="h4" fontWeight="bold" color="secondary">
    ₹{totalSpending}
  </Typography>
</Box>
    </div>
   
  </Container>

)
}

export default MoneyTrack;