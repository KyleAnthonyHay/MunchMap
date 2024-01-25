import React from 'react';
import './LandingPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';


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
            <div id="navbar">
                <Typography variant="h2" component="h1" gutterBottom pl={12} pt={3}>Munch Map </Typography>
                <div>
                <Button size="large" variant="text" color="primary" onClick={handleLogin}>Login</Button>
                <Button size="large" variant="text" color="primary" onClick={handleSignUp}>Sign Up</Button>
                </div>
            </div>
            <Container>
                
            </Container>
        </div> 
    )
}

export default LandingPage;