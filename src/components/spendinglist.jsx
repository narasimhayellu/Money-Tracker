import { Typography, Collapse, ListItemButton, List, Box } from '@mui/material';
import SpendingItem from './spendingitem';

import { useState } from 'react';

const SpendingList = ({ filterSpend, delSpend, updSpend }) => {
  const [openDates, setOpenDates] = useState({}); 

  const toggleDate = (date) => {
    setOpenDates(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  if (filterSpend.length === 0) {
    return <Typography align="center">No spendings for this month.</Typography>;
  }

  const groupedSpendings = filterSpend.reduce((groups, spending) => {
    const date = new Date(spending.date).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(spending);
    return groups;
  }, {});

  return (
    <List>
      {Object.entries(groupedSpendings).map(([date, spendingsOnDate]) => (
        <Box key={date} mb={2}>
          <ListItemButton onClick={() => toggleDate(date)}>
            <Typography variant="h6">{date}</Typography>
          </ListItemButton>
          <Collapse in={openDates[date]} timeout="auto" unmountOnExit>
            {spendingsOnDate.map((spending) => (
              <SpendingItem
                key={spending.id}
                spending={spending}
                delSpend={delSpend}
                updSpend={updSpend}
              />
            ))}
          </Collapse>
        </Box>
      ))}
    </List>
  );
};

export default SpendingList;