import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
/*import { green, red } from '@mui/material/colors';*/
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const ShelterTicket = ({ ticketNumber, name, location, contactInfo, donationType }) => {
  return (
    <Card sx={{ width: 500, m: 2, boxShadow: 3 }}>
      <CardActionArea>
        <CardContent sx={{ '& .MuiTypography-root': { mb: 1 },  }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'center'/* Add other styles as needed */ }}>
            Ticket Number: {ticketNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon color="action" sx={{ mr: 0.9 }} /> Location: {location}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactPhoneIcon color="action" sx={{ mr: 0.9 }} /> Contact Info: {contactInfo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <VolunteerActivismIcon color="action" sx={{ mr: 0.6 }} /> Donation Type: {donationType}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ShelterTicket;
