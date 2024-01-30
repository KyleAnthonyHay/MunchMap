import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './FeatureCard.css'

import TicketImage from '../assets/donate2.png'
import ServerImage from '../assets/ticketing.svg'
import UploadImage from '../assets/community2.svg'
// Define your styles object at the top of the file

const FeatureCard = () => {
  return (
            <Container sx={{ py: 2 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {/* ******************** Card 1 ******************** */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                A Sustainable Food Redistribution Platform
                                </Typography>
                                <img src={TicketImage} className="card-img" alt="Upload Tickets" style={{ width: '72.5%' }}/>
                                <Typography>
                                A revolutionary app that streamlines the process of food donation and redistribution, addressing both environmental and social concerns
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ******************** Card 2 ******************** */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                Organized and transparent process handling
                                </Typography>
                                <img src={ServerImage} className="card-img" alt="Upload Tickets" style={{ width: '100%', padding: '0.7px' }}/>
                                <Typography>
                                The well-designed ticketing system fosters donor-recipient engagement through a user-friendly interface, encouraging participation in the donation workflow
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ******************** Card 3 ******************** */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                Minimizes food waste, strengthens community
                                </Typography>
                                <img src={UploadImage} className="card-img" alt="Upload Tickets" style={{ width: '52%', padding: '18px' }}/>
                                <Typography>
                                By leveraging technology and strategic partnerships, we can transform a critical problem into an opportunity for positive social and environmental impact. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ... other features */}
                </Grid>
            </Container>

        
  )
}

export default FeatureCard

// rest