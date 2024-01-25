import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RestaurantForm.css'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const [ticketData, setTicketData] = useState({
        food_category: 0,
        expiration_date: '', // format YYYY-MM-DD
        checked: false,
        restaurant: null
    });

    const [restaurantId, setRestaurantId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8000/api/user-restaurants/', {
            headers: { Authorization: `Token ${token}` }
        })
            .then(response => {
                setRestaurantId(response.data[0]);
            })
            .catch(error => {
            });
    }, []);

    function createTicket(event) {
        event.preventDefault();
        const token = localStorage.getItem('token');

        axios.post('http://localhost:8000/api/tickets/', {
            food_category: ticketData.food_category,
            expiration_date: ticketData.expiration_date,
            checked: ticketData.checked,
            restaurant: restaurantId
        }, {
            headers: { Authorization: `Token ${token}` }
        })
            .then(response => {
                console.log(response)
                console.log('Ticket created successfully', response.data);
                // Handle ticket creation success
            })
            .catch(error => {
                console.log(error.response)
                console.error('Error creating ticket', error);
                // Handle ticket creation error
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

    return (
        <div className="landing-page">
            <div className="container">
                <button className="sign-out-button" onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
            <div> 
                <h1>Enter Donation Information</h1>
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
    );
}

export default LandingPage;

//