import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const SpecialistTicket = ({ ticket }) => {
  return (
    <Card sx={{ maxWidth: 500, m: 2, boxShadow: 3, listStyle: 'none', padding: 0 }}>
      <CardActionArea>
        <CardContent sx={{ '& .MuiTypography-root': { mb: 1 } }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {ticket.restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon color="action" sx={{ mr: 0.5 }} /> Location: {ticket.restaurant.address}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalDiningIcon color="action" sx={{ mr: 0.5 }} /> Food Category: {ticket.food_category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <FormatListNumberedIcon color="action" sx={{ mr: 0.5 }} /> Quantity: {ticket.quantity}
          </Typography>
          {/* add checked button */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SpecialistTicket;
