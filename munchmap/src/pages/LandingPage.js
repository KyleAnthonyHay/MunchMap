import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper, AppBar, Toolbar } from '@mui/material';
import image from '../assets/MunchMapLogo_Black.png'
import truck from '../assets/Truck.png'
import FeatureCard from '../components/FeatureCard';
import MunchMap from '../assets/MunchMap2.mp4'

function LandingPage() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login');
    }

    function handleSignUp() {
        navigate('/signup');
    }
    const buttonStyle = {
        color: '#FFFFFF',
        transition: 'background-color 0.3s ease',
    };
    const buttonStyleLogin = {
        borderColor: '#6273D9',
        color: '#6273D9',
        transition: 'background-color 0.3s ease',
    };
    const velvetColor = '#6273D9'; 
    const lightVelvetColor = 'A8A2E1'; 
    const darkerVelvetColor = '#5F65D9'; 

    return (
        <div>
            <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography component="h1" variant="h2" color="inherit" noWrap sx={{ flexGrow: 1, fontSize: '24px' }}>
                        Munch Map
                    </Typography>
                    <nav>
                        <Button
                            variant="outlined"
                            sx={{
                                ...buttonStyleLogin,
                                borderColor: velvetColor,
                                '&:hover': { backgroundColor: lightVelvetColor, borderColor: velvetColor },
                            }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                ...buttonStyle,
                                backgroundColor: velvetColor,
                                my: 1,
                                mx: 1.5,
                                '&:hover': { backgroundColor: darkerVelvetColor },
                            }}
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>
                    </nav>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" component="main" sx={{ pt: 1, pb: 4 }}>
                <Grid container spacing={4} alignItems="flex-end">
                    <Grid item xs={12} md={4}>
                        <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom sx={{ pb: 4 }}>
                        Welcome to MunchMap
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                        Transforming Food Waste <br /> into Community Impact!
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                ...buttonStyle,
                                backgroundColor: velvetColor,
                                my: 1,
                                '&:hover': { backgroundColor: darkerVelvetColor },
                            }}
                            onClick={handleLogin}
                        >
                            Explore Now
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pb: { md: 0 } }}>
                            {/*<img
                                style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
                                src={truck}
                                alt="Placeholder"
                            />*/}
                            <video
                            style={{ display: 'block', maxWidth: '100%', maxHeight: '100%', borderRadius: '15px' }}
                            autoPlay
                            loop
                            muted
                            >
                            <source src={MunchMap} type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <FeatureCard />
            <Container maxWidth="lg" component="main" sx={{ pt: 2, pb: 2 }}>
                <Grid item xs={12} md={5}>
                    <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom style={{ fontSize: '24px' }}>
                        Join the MunchMap mission and be a catalyst for change!
                    </Typography>
                </Grid>
            </Container>
        </div>
    );
}

export default LandingPage;

//