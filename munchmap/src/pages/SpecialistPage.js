import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SpecialistTicket from '../components/SpecialistTicket';
import './SpecialistPage.css'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import SignOutButton from '../components/SignOutButton';

const SpecialistPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tickets/list_unchecked_tickets/', {
          headers: { Authorization: `Token ${token}` }
        });
        setTickets(response.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <SignOutButton />
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={5}>
        <Box style={{ position: 'relative', padding: { xs: 3, md: 6 }, paddingBottom: { md: 0 }, width: 500 }}>
          <Typography variant="h2" component="h2" style={{ fontSize: '40px', padding: '20px', textAlign: 'center' }}>
            Tickets to Inspect
          </Typography>
          {tickets.map((ticketss) => (
            <SpecialistTicket ticket={ticketss} key={ticketss.id} />
          ))}
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}

export default SpecialistPage;
