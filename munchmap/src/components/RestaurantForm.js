import React from 'react';
import './RestaurantForm.css'; // Make sure to import the CSS file

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Welcome to the Food Donation Platform</h1>
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