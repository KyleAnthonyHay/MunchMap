import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import SignOutButton from '../components/SignOutButton'
// MaterialUI Imports
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';

const ShelterPage = () => {
  const [shelter, setShelter] = useState(null);
  const [quantity_requested, setQuantity] = useState(10);
  const [food_category, setFoodCategory] = useState(0);


  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchShelter = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/shelters/get_my_shelter/', {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        console.log('Shelter:', response.data);
        setShelter(response.data);
      } catch (error) {
        console.error('Error fetching shelter', error);
      }
    };
    fetchShelter();
  }
  , []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const newRequest = {
      shelter: shelter.id, 
      quantity_requested: quantity_requested,
      food_category: food_category
    };

    console.log(newRequest)
    try {
      const response = await axios.post('http://localhost:8000/api/shelter-requests/', newRequest, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      console.log('Request created:', response.data);
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  }
  
  
  return (
    <div>
      <SignOutButton/>
      <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={5}>
        <Box style={{ position: 'relative', padding: { xs: 3, md: 6 }, paddingBottom: { md: 0 }, width: 500 }}>
          <Typography variant="h2" component="h2" style={{ fontSize: '40px', padding: '20px', textAlign: 'center' }}>
            Create a Shelter Ticket
          </Typography>
          {/* {tickets.map((ticketss) => (
            <SpecialistTicket ticket={ticketss} key={ticketss.id} />
          ))} */}
        </Box>
      </Grid>
    </Grid>
    <form onSubmit={handleSubmit}>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity_requested}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </label>
      <label>
        Food Category:
        <input
          type="number"
          value={food_category}
          onChange={(event) => setFoodCategory(event.target.value)}
        />
      </label>
      <Button type="submit" variant="contained" color="primary">
        Create Ticket
      </Button>
    </form>
    </div>
  )
}

export default ShelterPage
//