import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SpecialistTicket from '../components/SpecialistTicket';
import './SpecialistPage.css'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import SignOutButton from '../components/SignOutButton';
import { useNavigate } from 'react-router-dom';
import  LoadingScreen  from '../utils/LoadingScreen';
import CustomDialog from '../utils/CustomDialog';


const SpecialistPage = () => {
  const [tickets, setTickets] = useState([]);
  const [specialist, setSpecialist] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  // Simluates a loading screen
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // Fetch the specialist to display their page otherwise redirect to login
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchSpecialist = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/inspectors/get_my_food_inspector/', {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        setSpecialist(response.data);
      } catch (error) {
        localStorage.removeItem('token');
        setOpenDialog(true);
        navigate('/login');
        
      }
    };
    fetchSpecialist();
  }
  , []);


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


  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Box >
      <CustomDialog
        open={openDialog}
        title="Are you sure you want to confirm?"
        content="You are about to confirm inspection of this ticket."
        onClose={() => setOpenDialog(false)}
      />
      <SignOutButton />
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h2" align="center" style={{ fontSize: '40px', padding: '20px', textAlign: 'center' }}>
            Tickets to Inspect
          </Typography>
          {tickets.map((ticketss) => (
            console.log(ticketss),
            <SpecialistTicket ticket={ticketss} key={ticketss.id} />
          ))}
      </Grid>
    </Grid>
    </Box>
  )
}

export default SpecialistPage;
