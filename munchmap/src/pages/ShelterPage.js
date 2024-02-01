import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Box, Grid, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Card, Snackbar, Slide
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SignOutButton from '../components/SignOutButton';
import CustomDialog from '../utils/CustomDialog';
import LoadingScreen from '../utils/LoadingScreen';


// Styled components using Material UI's 'styled' API
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#6273D9',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));


const ShelterPage = () => {
  const [shelter, setShelter] = useState(null);
  const [quantity_requested, setQuantity] = useState(10);
  const [food_category, setFoodCategory] = useState("0");
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);


  // Simluates a loading screen
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);



  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchShelter = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/shelters/get_my_shelter/', {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        console.log('Shelter:', response.data);
        setShelter(response.data);
      } catch (error) {
        setOpenDialog(true);
        navigate('/login');
        localStorage.removeItem('token');
      }
    };
    fetchShelter();
  }
  , []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make sure fields are not empty
    if (!quantity_requested || !food_category) {
      console.log('Error: Fields are empty');
      setOpenDialog(true);
      return;
    }
    const token = localStorage.getItem('token');
    const newRequest = {
      shelter: shelter.id, 
      quantity_requested: quantity_requested,
      food_category: food_category
    };

    console.log(newRequest)
    try {
      const response = await axios.post('http://localhost:8000/api/shelter-requests/', newRequest, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      console.log('Request created:', response.data);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  }

  const handleInputChange = (event) => {
        setFoodCategory(event.target.value);

    };


  if (loading) {
    return <LoadingScreen />
  }
  
  
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <CustomDialog
        open={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
        title="Success"
        content="Request Created Successfully"
      />
      <Snackbar
        open={openDialog}
        autoHideDuration={6000}
        onClose={() => setOpenDialog(false)}
        message="An error occurred, please log in again"
        TransitionComponent={Slide}
      />
      <SignOutButton />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <StyledCard elevation={3}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#6273D9' }}>
              Create a Shelter Ticket
            </Typography>
            <form>
              <FormControl fullWidth margin="normal">
                <TextField
                  label="Quantity"
                  type="number"
                  value={quantity_requested}
                  onChange={(event) => setQuantity(event.target.value)}
                  variant="outlined"
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>Type</InputLabel>
                <Select
                  value={food_category}
                  onChange={handleInputChange}
                  label="Type"
                >
                  <MenuItem value="0">Can Food</MenuItem>
                  <MenuItem value="1">Vegetables</MenuItem>
                  <MenuItem value="2">Non-Perishables</MenuItem>
                </Select>
              </FormControl>
              <StyledButton type="submit" onClick={handleSubmit} variant="contained" fullWidth>
                Create Ticket
              </StyledButton>
            </form>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};


export default ShelterPage;