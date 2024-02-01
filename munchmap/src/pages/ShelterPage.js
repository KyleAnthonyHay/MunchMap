import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import SignOutButton from '../components/SignOutButton'
// MaterialUI Imports
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// styles
import '../components/RestaurantForm.css';
import { Dialog } from '@mui/material';


const ShelterPage = () => {
  const [shelter, setShelter] = useState(null);
  const [quantity_requested, setQuantity] = useState(10);
  const [food_category, setFoodCategory] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();


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
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  }

  const handleInputChange = (event) => {
        setFoodCategory(event.target.value);
    };
  
  
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography variant="h6" component="h6" style={{ padding: '20px', textAlign: 'center' }}>
         An error occured, please log in again 
        </Typography>
      </Dialog>
      <SignOutButton/>
      <Grid container justifyContent="center" alignItems="center" >
      <Grid item xs={12} md={5}>
        <div>
            <Typography variant="h2" component="h2" style={{ fontSize: '40px', padding: '20px', textAlign: 'center', whiteSpace: 'nowrap' }}>
            Make a Request
            </Typography>
            <form onSubmit={handleSubmit} className="donation-form">
              <div className="form-group">
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={quantity_requested}
                    onChange={(event) => setQuantity(event.target.value)}
                    className="form-control"
                  />
                </label>
              </div>
              <div className="form-group">
                        <label>Type:</label>
                        <select name="food_category" onChange={handleInputChange} value={food_category} className="form-control">
                            <option value="0">Can Food</option>
                            <option value="1">Vegetables</option>
                            <option value="2">Non-Perishables</option>
                        </select>
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: '#5F65D9', color: 'white' }}
                      onClick={handleSubmit}
                    >
                      Create Ticket
                    </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ShelterPage
//