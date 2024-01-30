import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Checkbox, FormControlLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import Button from '@mui/material/Button';

let seenTickets = [];

export const VolunteerTicket = ({ key, ShelterName, ShelterAddress, FoodCategory, QuantityRequested, RestaurantList }) => {
  return (
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
        {/* add delivered button */}
        <Button variant="contained" color="success" onClick={() => {console.log("Delivered!")}}>Mark as Delivered</Button>
        {RestaurantList.map((RestarauntTicket) => (
            <>
              {RestarauntTicket.restaurant.name}
              {RestarauntTicket.restaurant.address}
              {RestarauntTicket.restaurant.id}
            </>
          )
          )}
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
