import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RestaurantForm.css'
import { useNavigate } from 'react-router-dom';
import SignOutButton from '../components/SignOutButton';
import Typography from '@mui/material/Typography';
import LoadingScreen from '../utils/LoadingScreen';
import CustomDialog from '../utils/CustomDialog';

function LandingPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [loading, setLoading] = useState(true); 
    const [ticketData, setTicketData] = useState({
        food_category: 0,
        expiration_date: '', // format YYYY-MM-DD
        checked: false,
        restaurant: null
    });

    const [openDialog, setOpenDialog] = useState(false);

    const [restaurantId, setRestaurantId] = useState(null);

    // Simluates a loading screen
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8000/api/user-restaurants/', {
            headers: { Authorization: `Token ${token}` }
        })
            .then(response => {
                setRestaurantId(response.data[0].id)
            })
            .catch(error => {
                if (error && error.status === 401 || error.status === 403) {
                    console.log('Unauthorized, logging out ...');
                    localStorage.removeItem('token');
                    setOpenDialog(true);
                }
                else {
                    console.log('An error occurred:', error.response);
                    navigate('/login');
                }
            });
    }, []);

    function createTicket(event) {
        event.preventDefault();
        // Make sure fields are not empty 
        if (!ticketData.food_category || !ticketData.expiration_date) {
            setOpenDialog(true);
            return;
        }
        const token = localStorage.getItem('token');

        axios.post('http://localhost:8000/api/tickets/', {
            food_category: ticketData.food_category,
            expiration_date: ticketData.expiration_date,
            checked: ticketData.checked,
            restaurant: restaurantId,
            quantity: ticketData.quantity
        }, {
            headers: { Authorization: `Token ${token}` }
        })
            .then(response => {
                console.log(response)
                console.log('Ticket created successfully', response.data);
                // Handle ticket creation success
                setIsDialogOpen(true);
            })
            .catch(error => {
                if (error && error.status === 401 || error.status === 403) {
                    console.log('Unauthorized, logging out ...');
                    localStorage.removeItem('token');
                    setOpenDialog(true);
                }
                else {
                    console.log('An error occurred:', error.response);
                    navigate('/login');
                }
            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTicketData({ ...ticketData, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        setTicketData({ ...ticketData, checked: event.target.checked });
    };

    const navigate = useNavigate();

    function handleSignOut() {
        navigate('/');
        console.log('Sign Out clicked');
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };


    if (loading) {
        return <LoadingScreen />
    }

    return (
        <div>
            <CustomDialog
                open={isDialogOpen}
                handleClose={handleCloseDialog}
                title="Success"
                content="Ticket created successfully"
            />

            <CustomDialog 
                open={openDialog}
                handleClose={() => setOpenDialog(false)}
                title="Error"
                content="An error occurred, please try again."
            />
        <SignOutButton />
        <div className="landing-page"> 
            <div className="container">
                <Typography variant="h2" component="h2" style={{ fontSize: '40px', padding: '20px', textAlign: 'center', whiteSpace: 'nowrap' }}>
                    Enter Donation Information
                </Typography>
            </div>
            <div>
                <form onSubmit={createTicket} className="donation-form">
                    <div className="form-group">
                        <label>Type:</label>
                        <select name="food_category" onChange={handleInputChange} value={ticketData.food_category} className="form-control">
                            <option value="0">Can Food</option>
                            <option value="1">Vegetables</option>
                            <option value="2">Non-Perishables</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Quantity (lbs):</label>
                        <input
                            type="number"
                            name="quantity"
                            onChange={handleInputChange}
                            value={ticketData.quantity}
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Expiration Date:</label>
                        <input
                            type="date"
                            name="expiration_date"
                            onChange={handleInputChange}
                            value={ticketData.expiration_date}
                            className="form-control"
                        />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
            </div>
            </div>
        </div>
    );
}

export default LandingPage;
