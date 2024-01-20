import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantForm.css'; // Make sure to import the CSS file

function LandingPage() {
    const navigate = useNavigate();
    function handleSignOut() {
        navigate('/');
        console.log('Login clicked');
    }
    return (
        <div className="landing-page">
            <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
            <h1>Enter Donation Information</h1>
            <div className="form-container">
                <form>
                    <label htmlFor="foodType">Type:</label>
                    <select id="foodType" name="foodType">
                        <option value="Can Food">Can Food</option>
                        <option value="Veggies">Veggies</option>
                        <option value="Fruit">Fruit</option>
                        <option value="Grains">Grains</option>
                        <option value="Meats">Meats</option>
                    </select>

                    <label htmlFor="expirationDate">Expiration Date:</label>
                    <input type="date" id="expirationDate" name="expirationDate" />

                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LandingPage;