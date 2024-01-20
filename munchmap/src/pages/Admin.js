import React from 'react';
import { useNavigate } from 'react-router-dom';


function Admin() {
    const navigate = useNavigate();
    function handleSignOut() {
        navigate('/');
        console.log('Login clicked');
    }
    return (
        <div class = "container">
            <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
        </div> 
    );
}

export default Admin;