import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Checkbox, FormControlLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CustomDialog from '../utils/CustomDialog';
import LoadingScreen from '../utils/LoadingScreen';
import axios from 'axios';


export const VolunteerTicket = ({ key, ShelterName, ShelterAddress, FoodCategory, QuantityRequested, RestaurantList }) => {

  const uniqueRestaurantNames = Array.from(new Set(RestaurantList.map(ticket => ticket.restaurant.address)));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleDeliver = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(`http://localhost:8000/api/shelter-requests/${key}/deliver_request/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response); 
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      
    } catch (err) {
      console.log(err)
    }
  };

  const handleConfirmAction = async () => {
    await handleDeliver();
    setIsDialogOpen(false);
  }

  const handleCancelAction = () => {
    setIsDialogOpen(false);
  }



  if (loading) {
    return <LoadingScreen />
  }


  return (
    <div>
      <CustomDialog
        open={isDialogOpen}
        handleClose={handleCancelAction}
        title="Are you sure you want to confirm?"
        content="You are about to confirm delivery of this ticket."
        showConfirmButton={true}
        onConfirm={handleConfirmAction}
        confirmText="Yes"
        cancelText="No"
      />

      <Card sx={{ maxWidth: 500, m: 2, boxShadow: 3, listStyle: 'none', padding: 0 }}>
        <CardActionArea>
          <CardContent sx={{ '& .MuiTypography-root': { mb: 1 } }}>
            {/* Restaraunt Inspect Ticket */}
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
              {ShelterName}
            </Typography>
            {/* Restaurant Address */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon color="action" sx={{ mr: 1.5 }} /> Shelter Location: {ShelterAddress}
            </Typography>
            {/* Restaurant Food Category */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalDiningIcon color="action" sx={{ mr: 1.5 }} /> Food Category: {FoodCategory}
            </Typography>
            {/* Restaurant Quantity */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <FormatListNumberedIcon color="action" sx={{ mr: 1.5 }} /> Quantity: {QuantityRequested}
            </Typography>
            {/* Pickup Locations */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <DeliveryDiningIcon color="action" sx={{ mr: 1.5 }} /> Pickup Locations: {uniqueRestaurantNames.map((RestarauntTicket) => (
                <>
                  {RestarauntTicket}
                </>
              )
              )}
            </Typography>

            {/* add delivered button */}
            <Button variant="contained" color="success" onClick={() => setIsDialogOpen(true)}>Mark as Delivered</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
