import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css'
const AdminView = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchTickets = async () => {
            try {
                // Replace with the actual API URL and authentication method
                const response = await axios.get('http://localhost:8000/api/tickets/', 
                {
                    headers: { Authorization: `Token ${token}` }
                });
                setTickets(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTickets();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // old code

    // Sample restaurant and shelter data with new fields
    const restaurants = [
        {
            ticketNumber: '12345',
            name: 'Restaurant 1',
            location: 'Location 1',
            contactInfo: 'Contact 1',
            donationType: 'Canned Food',
            expirationDate: '2022-12-31',
            inspected: 'Yes',
        },
        {
            ticketNumber: '23456',
            name: 'Restaurant 2',
            location: 'Location 2',
            contactInfo: 'Contact 2',
            donationType: 'Vegetables',
            expirationDate: '2022-11-30',
            inspected: 'No',
        },
        // Add more restaurants as needed
    ];

    const shelters = [
        {
            ticketNumber: '34567',
            name: 'Shelter 1',
            location: 'Location 1',
            contactInfo: 'Contact 1',
            donationType: 'Grains',
        },
        {
            ticketNumber: '45678',
            name: 'Shelter 2',
            location: 'Location 2',
            contactInfo: 'Contact 2',
            donationType: 'Meats',
        },
        // Add more shelters as needed
    ];

    return (
        <div className="admin-view">
            <div className="container">
                <button className="sign-out-button" >
                    Sign Out
                </button>
            </div>
            <div className="admin-list">
                <h2>Restaurants</h2>
                {restaurants.map((restaurant, index) => (
                    <div key={index} className="card">
                        <h3>Ticket #{restaurant.ticketNumber}</h3>
                        <p>Name: {restaurant.name}</p>
                        <p>Location: {restaurant.location}</p>
                        <p>Contact Info: {restaurant.contactInfo}</p>
                        <p>Donation Type: {restaurant.donationType}</p>
                        <p>Expiration Date: {restaurant.expirationDate}</p>
                        <div className="inspection-checkbox">
                            <label>Inspected:</label>
                                <div className="radio-group">
                                    <input type="radio" id={`yes-${index}`} value="Yes" checked={restaurant.inspected === 'Yes'} readOnly />
                                    <label htmlFor={`yes-${index}`}>Yes</label>

                                    <input type="radio" id={`no-${index}`} value="No" checked={restaurant.inspected === 'No'} readOnly />
                                    <label htmlFor={`no-${index}`}>No</label>
                                </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-list">
                <h2>Shelters</h2>
                {shelters.map((shelter, index) => (
                    <div key={index} className="card">
                        <h3>Ticket #{shelter.ticketNumber}</h3>
                        <p>Name: {shelter.name}</p>
                        <p>Location: {shelter.location}</p>
                        <p>Contact Info: {shelter.contactInfo}</p>
                        <p>Donation Type: {shelter.donationType}</p>
                        <div className="inspection-checkbox">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminView;