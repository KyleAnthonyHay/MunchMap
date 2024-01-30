import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import SignOutButton from '../components/SignOutButton';
import { VolunteerTicket } from '../components/VolunteerTicket';




const VolunteerPage = () => {
  const [shelterRequests, setShelterRequests] = useState([]);
  const [chosenShelterRequest, setChosenShelterRequest] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchShelterRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/shelter-requests/list_not_delivered_requests/', {
          headers: { Authorization: `Token ${token}` }
        });
        setShelterRequests(response.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchShelterRequests();
  }
  , []);


  const handleDeliver = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(`http://localhost:8000/api/shelter-requests/${chosenShelterRequest.id}/deliver_request/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response);
      setChosenShelterRequest(null);
    } catch (err) {
      console.log(err)
    }
  };



  return (
    <div>
      <SignOutButton />
      <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={5}>
        <Box style={{ position: 'relative', padding: { xs: 3, md: 6 }, paddingBottom: { md: 0 }, width: 500 }}>
          <Typography variant="h2" component="h2" style={{ fontSize: '40px', padding: '20px', textAlign: 'center' }}>
            Deliver to Shelters
          </Typography>
          {shelterRequests.map((shelterRequest) => (
            <>
              <VolunteerTicket key={shelterRequest.id} 
              ShelterName={shelterRequest.shelter.name} 
              ShelterAddress={shelterRequest.shelter.address}
              FoodCategory={shelterRequest.food_category}
              QuantityRequested={shelterRequest.quantity_requested}
              RestaurantList={shelterRequest.tickets}
              />
            </>
          )
          )}
        </Box>
      </Grid>
    </Grid>
    </div>
  )
}

export default VolunteerPage

// {shelterRequests.map((shelterRequest) => (
//   <li key={shelterRequest.id}>
//     <h1>{shelterRequest.shelter.name}</h1>
//     <h2>{shelterRequest.shelter.address}</h2> 
//     <h3>{shelterRequest.food_category}</h3>
//     <h4>{shelterRequest.quantity_requested}</h4>
//     <VolunteerTicket/>
//   </li>
// )
// )}