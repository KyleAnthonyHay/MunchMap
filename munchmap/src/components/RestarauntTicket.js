import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { green, red } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Button from '@mui/material/Button';

import axios from 'axios';

// const [shelterRequests, setShelterRequests] = useState([]);
// const [isLoading, setIsLoading] = useState(true);
// const [error, setError] = useState(null);

// const matchTicketsWithShelterRequests = async () => {
//   const token = localStorage.getItem('token');
//   try {
//       const response = await axios.post('http://localhost:8000/api/tickets/match_tickets/',
//           {
//               headers: { Authorization: `Token ${token}` }
//           });
//       setShelterRequests(response.data);
//   } catch (err) {
//       console.log(err)
//       setError(err);
//   } finally {
//       setIsLoading(false);
//   }
// };

const RestarauntTicket = ({ ticketNumber, name, location, contactInfo, donationType, expirationDate, inspected, quantity }) => {
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
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <DateRangeIcon color="action" sx={{ mr: 0.9 }} /> Expiration Date: {expirationDate}
          </Typography>
          <Typography variant="body2" sx={{ color: inspected ? green[500] : red[500], display: 'flex', alignItems: 'center' }}>
            {inspected ? <CheckCircleOutlineIcon sx={{ mr: 0.9 }} /> : <ErrorOutlineIcon sx={{ mr: 0.9 }} />} Inspected: {inspected ? 'Yes' : 'No'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <VolunteerActivismIcon color="action" sx={{ mr: 0.6 }} /> Quantity: {quantity}
          </Typography>
          {/* <Button variant="outlined">Match to Shelter</Button> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RestarauntTicket;