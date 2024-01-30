import React from 'react'
import SignOutButton from '../components/SignOutButton'
// MaterialUI Imports
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const ShelterPage = () => {
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
    </div>
  )
}

export default ShelterPage