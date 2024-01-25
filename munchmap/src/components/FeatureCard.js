import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const FeatureCard = () => {
  return (
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {/* Repeat this for each feature you want to showcase */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Upload Tickets
                                </Typography>
                                <Typography>
                                    This is a brief description of the first feature your app offers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ... other features */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Upload Tickets
                                </Typography>
                                <Typography>
                                    This is a brief description of the first feature your app offers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* ... other features */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Admin Console
                                </Typography>
                                <Typography>
                                    Connect restaurant tickets to wearhouses that need food.
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