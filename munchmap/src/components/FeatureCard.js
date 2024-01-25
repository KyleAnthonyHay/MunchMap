import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './FeatureCard.css'

import TicketImage from '../assets/Tickets.svg'
import ServerImage from '../assets/Server.svg'
import UploadImage from '../assets/Upload.svg'
// Define your styles object at the top of the file

const FeatureCard = () => {
  return (
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {/* ******************** Card 1 ******************** */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Upload Tickets
                                </Typography>
                                <img src={TicketImage} className="card-img" alt="Upload Tickets"/>
                                <Typography>
                                    This is a brief description of the first feature your app offers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ******************** Card 2 ******************** */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Upload Tickets
                                </Typography>
                                <img src={ServerImage} className="card-img" alt="Upload Tickets"/>
                                <Typography>
                                    This is a brief description of the first feature your app offers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ******************** Card 3 ******************** */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent className="card-content">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Upload Tickets
                                </Typography>
                                <img src={UploadImage} className="card-img" alt="Upload Tickets"/>
                                <Typography>
                                    This is a brief description of the first feature your app offers.
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