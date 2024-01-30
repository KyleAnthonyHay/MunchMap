import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import SignOutButton from '../components/SignOutButton'
// MaterialUI Imports
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
// styles
import '../components/RestaurantForm.css';

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
        <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" style={{ fontSize: '40px', padding: '20px', textAlign: 'center', whiteSpace: 'nowrap' }}>
              Create a Shelter Ticket
            </Typography>
            <form onSubmit={handleSubmit} className="donation-form">
              <div className="form-group">
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={quantity_requested}
                    onChange={(event) => setQuantity(event.target.value)}
                    className="form-control"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Food Category:
                  <input
                    type="number"
                    value={food_category}
                    onChange={(event) => setFoodCategory(event.target.value)}
                    className="form-control"
                  />
                </label>
              </div>
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                  Create Ticket
                </Button>
            </form>

        </Grid>
      </Grid>
    </div>
  )
}

export default ShelterPage
//