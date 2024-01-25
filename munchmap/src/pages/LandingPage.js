import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper, AppBar, Toolbar } from '@mui/material';
import image from '../assets/MunchMapLogo_Black.png'
import truck from '../assets/Truck.png'
import FeatureCard from '../components/FeatureCard';

function LandingPage() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login');
    }

    function handleSignUp() {
        navigate('/signup');
    }

    return (
        <div>
            <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Munch Map
                    </Typography>
                    <nav>
                        <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={handleLogin}>
                            Login
                        </Button>
                        <Button variant="contained" sx={{ my: 1, mx: 1.5 }} onClick={handleSignUp}>
                            Sign Up
                        </Button>
                    </nav>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} md={5}>
                        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                            From trash to wearhouse.
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Join our community to transport food to those who need it.
                        </Typography>
                        <Button variant="contained" size="large" onClick={handleLogin} sx={{ my: 3 }}>
                            Explore Now
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pb: { md: 0 } }}>
                            <img
                                style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
                                src={truck}
                                alt="Placeholder"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            <FeatureCard />
        </div>
    );
}

export default LandingPage;
