import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Checkbox, FormControlLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import axios from 'axios';

import CustomDialog from '../utils/CustomDialog';


const SpecialistTicket = ({ ticket }) => {
  // State to track if the checkbox is checked
  const [checked, setChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [unCheckDialogOpen, setUnCheckDialogOpen] = useState(false);

  const markAsInspected = async (ticketId) => {
    const token = localStorage.getItem('token');
    console.log(ticketId);
    try {
      const response = await axios.post(`http://localhost:8000/api/tickets/${ticketId}/check_ticket/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    console.log("Ticket marked as inspected");
  };
  const markAsUninspected = async (ticketId) => {
    const token = localStorage.getItem('token');
    console.log(ticketId);
    try {
      const response = await axios.post(`http://localhost:8000/api/tickets/${ticketId}/uncheck_ticket/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    console.log("Ticket marked as not inspected");
  };

  // Simplified handleConfirmAction
  const handleConfirmAction = async () => {
    await markAsInspected(ticket.id);
    setChecked(true); // Update checked state
    setIsDialogOpen(false); // Close dialog after action
    setUnCheckDialogOpen(false); // Close uncheck dialog if it's open
  };

  // handleCancelAction remains the same
  const handleCancelAction = async () => {
    await markAsUninspected(ticket.id);
    setChecked(false); 
    setIsDialogOpen(false);
    setUnCheckDialogOpen(false);
  };


  // Handle change event for checkbox
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setIsDialogOpen(true);
    } else {
      setUnCheckDialogOpen(true);
    }
  };

  return (
    <div>
      <CustomDialog
        open={isDialogOpen}
        handleClose={handleCancelAction}
        title="Confirm Action"
        content="Are you sure you want to mark this ticket as inspected?"
        showConfirmButton={true}
        onConfirm={handleConfirmAction}
        confirmText="Yes"
        cancelText="No"
      />

      <CustomDialog
        open={unCheckDialogOpen}
        handleClose={handleConfirmAction}
        title="Confirm Action"
        content="Are you sure you want to mark this ticket as uninspected?"
        showConfirmButton={true}
        onConfirm={handleCancelAction}
        confirmText="Yes"
        cancelText="No"
      />
      <Card alignItems="center" sx={{ maxWidth: 500, m: 2, boxShadow: 3, listStyle: 'none', padding: 0, marginLeft: 'auto', marginRight: 'auto' }}>
        <CardActionArea>
          <CardContent sx={{ '& .MuiTypography-root': { mb: 1 } }}>
            {/* Restaraunt Inspect Ticket */}
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
              {ticket.restaurant.name}
            </Typography>
            {/* Restaurant Address */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon color="action" sx={{ mr: 0.5 }} /> Location: {ticket.restaurant.address}
            </Typography>
            {/* Restaurant Food Category */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalDiningIcon color="action" sx={{ mr: 0.5 }} /> Food Category: {ticket.food_category}
            </Typography>
            {/* Restaurant Quantity */}
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <FormatListNumberedIcon color="action" sx={{ mr: 0.5 }} /> Quantity: {ticket.quantity}
            </Typography>
            {/* add checked button */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  color="primary"
                  sx={{ paddingTop: '2px', paddingBottom: '2px' }} // Adjust padding to align with the text
                />
              }
              label={<Typography variant="body2" color="text.secondary" sx={{ marginLeft: '-4px', marginTop: '10px' }}>Mark as Inspected</Typography>}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default SpecialistTicket;
