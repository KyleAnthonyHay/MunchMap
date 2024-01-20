import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Make sure to import the CSS file

function AdminView() {
    const navigate = useNavigate();

    function handleSignOut() {
        navigate('/');
        console.log('Sign Out clicked');
    }

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
            donationType: 'Clothing',
        },
        {
            ticketNumber: '45678',
            name: 'Shelter 2',
            location: 'Location 2',
            contactInfo: 'Contact 2',
            donationType: 'Bedding',
        },
        // Add more shelters as needed
    ];

    return (
        <div className="admin-view">
            <div className="container">
                <button className="sign-out-button" onClick={handleSignOut}>
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
                            <label>
                                Inspected:
                                <input type="radio" value="Yes" checked={restaurant.inspected === 'Yes'} readOnly />
                                Yes
                                <input type="radio" value="No" checked={restaurant.inspected === 'No'} readOnly />
                                No
                            </label>
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
}

export default AdminView;
