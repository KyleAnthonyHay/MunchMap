import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestarauntTicket from '../components/RestarauntTicket';
import './Admin.css';
import ShelterTicket from '../components/ShelterTicket';
import Typography from '@mui/material/Typography';
import SignOutButton from '../components/SignOutButton';

import Button from '@mui/material/Button';
import LoadingScreen from '../utils/LoadingScreen';
import CustomDialog from '../utils/CustomDialog';

const AdminView = () => {
    const [tickets, setTickets] = useState([]);
    const [expiredTickets, setExpiredTickets] = useState([]);
    const [shelterRequests, setShelterRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDialogOpen , setIsDialogOpen] = useState(false);

    // Simluates a loading screen
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    const fetchTickets = async () => {
        const token = localStorage.getItem('token');
        try {
            // Replace with the actual API URL and authentication method
            const response = await axios.get('http://localhost:8000/api/tickets/list_checked_tickets/',
                {
                    headers: { Authorization: `Token ${token}` }
                });
            setTickets(response.data);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
        }
    };

    const fetchExpiredTickets = async () => {
        const token = localStorage.getItem('token');
        try {
            // Replace with the actual API URL and authentication method
            const response = await axios.get('http://localhost:8000/api/tickets/list_expired_tickets/',
                {
                    headers: { Authorization: `Token ${token}` }
                });
            setExpiredTickets(response.data);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
        }
    };

    const getNotDelieveredShelterRequests = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://localhost:8000/api/shelter-requests/list_not_fulfilled_requests/',
                {
                    headers: { Authorization: `Token ${token}` }
                });
            setShelterRequests(response.data);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
        }
    }

    useEffect(() => {
        fetchTickets();
        fetchExpiredTickets();
        getNotDelieveredShelterRequests();
    }, []);


    const deleteExpiredTickets = async () => {
        const token = localStorage.getItem('token');
        try {
            // Replace with the actual API URL and authentication method
            const response = await axios.delete('http://localhost:8000/api/tickets/delete_expired_tickets/',
                {
                    headers: { Authorization: `Token ${token}` }
                });
            setExpiredTickets(response.data);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    const matchTicketsWithShelterRequests = async () => {
        const token = localStorage.getItem('token');
        setIsLoading(true)
        try {
            const response = await axios.post('http://localhost:8000/api/tickets/match_tickets/',
                {
                    headers: { Authorization: `Token ${token}` }
                });
            console.log(response);
            fetchTickets();
            getNotDelieveredShelterRequests();
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setTimeout(() => { 
                setIsLoading(false);
            }
            , 1500);
        }
    };

    const clickMatchButton = () => {
        setIsDialogOpen(true);
    }

    const handleClose = () => {
        setIsDialogOpen(false);
    }

    const handleConfirmAction = async () => {
        await matchTicketsWithShelterRequests();
        setIsDialogOpen(false);
    }

    const testConsoleLog = () => {
        console.log('test');
    }


    if (isLoading) return <LoadingScreen />;
    if (error) return <div>Error: {error.message}</div>;

    
    return (
        <div> 
            <CustomDialog
                open={isDialogOpen}
                handleClose={handleClose}
                title="Confirm Action"
                content="Are you sure you want to match tickets with shelter requests?"
                showConfirmButton={true}
                onConfirm={handleConfirmAction}
                confirmText="Match"
                cancelText="Cancel"
            />
            <SignOutButton />
        <div className="admin-view">
            {/* ******************************** Restaurant Tickets ******************************** */}
            <div className="admin-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h2" component="h2" style={{ fontSize: '40px' }}>
            Restaraunt Tickets
            </Typography>
            <Button variant="contained" onClick={clickMatchButton}>Match Tickets to Shelters</Button>
                {tickets.map(ticket => (
                    <RestarauntTicket 
                        ticketNumber={ticket.id}
                        name={ticket.restaurant.name}
                        location={ticket.restaurant.address}
                        contactInfo={ticket.restaurant.phone_number}
                        donationType={ticket.food_category_display}
                        expirationDate={ticket.expiration_date}
                        inspected={ticket.checked}
                        quantity={ticket.quantity}
                    />
                ))}
                {console.log(tickets)}
            </div>

            {/* ******************************** Shelter Tickets ******************************** */}
            <div className="admin-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/*<h2>Shelter Tickets</h2>*/}
                <Typography variant="h2" component="h2" style={{ fontSize: '40px' }}>
                    Shelter Tickets
                </Typography>
                {shelterRequests.map((shelterRequestss, index) => (
                    <ShelterTicket
                    key={index}
                    ticketNumber={shelterRequestss.id}
                    name={shelterRequestss.shelter.name}
                    location={shelterRequestss.shelter.address}
                    contactInfo={shelterRequestss.shelter.phone_number}
                    donationType={shelterRequestss.food_category_display}
                    quantityRequested={shelterRequestss.quantity_requested}
                />
                ))}
            </div>
        </div>
        </div>

    );
};

export default AdminView;