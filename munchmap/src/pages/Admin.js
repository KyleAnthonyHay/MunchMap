import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestarauntTicket from '../components/RestarauntTicket';
import './Admin.css';
import ShelterTicket from '../components/ShelterTicket';
import Typography from '@mui/material/Typography';
import SignOutButton from '../components/SignOutButton';

const AdminView = () => {
    const [tickets, setTickets] = useState([]);
    const [expiredTickets, setExpiredTickets] = useState([]);
    const [shelterRequests, setShelterRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchTickets = async () => {
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
                setIsLoading(false);
            }
        };

        fetchTickets();
    }, []);


    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchExpiredTickets = async () => {
            try {
                // Replace with the actual API URL and authentication method
                const response = await axios.get('http://localhost:8000/api/tickets/list_expired_tickets/',
                    {
                        headers: { Authorization: `Token ${token}` }
                    });
                setExpiredTickets(null);
            } catch (err) {
                console.log(err)

            } finally {

            }
        };

        fetchExpiredTickets();
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

    useEffect(() => {
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
                setIsLoading(false);
            }
        };
        getNotDelieveredShelterRequests();
    }, []);


    const matchTicketsWithShelterRequests = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://localhost:8000/api/tickets/match_tickets/',
                {
                    headers: { Authorization: `Token ${token}` }
                });
            setShelterRequests(response.data);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    
    return (
        <div>
            <SignOutButton />
        <div className="admin-view">
            {/* <h1>Admin Dashboard</h1>
            <h2>Tickets</h2> */}
            {/* ******************************** Restaurant Tickets ******************************** */}
            <div className="admin-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            {/*<h2>Restaraunt Tickets</h2>*/}
            <Typography variant="h2" component="h2" style={{ fontSize: '40px' }}>
            Restaraunt Tickets
            </Typography>
                {tickets.map(ticket => (
                    <RestarauntTicket 
                        ticketNumber={ticket.id}
                        name={ticket.restaurant.name}
                        location={ticket.restaurant.address}
                        contactInfo={ticket.restaurant.phone_number}
                        donationType={ticket.food_category}
                        expirationDate={ticket.expiration_date}
                        inspected={ticket.checked}
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
                {shelterRequests.map((shelterRequests, index) => (
                    <ShelterTicket
                    key={index}
                    ticketNumber={shelterRequests.id}
                    name={shelterRequests.shelter.name}
                    location={shelterRequests.shelter.address}
                    contactInfo={shelterRequests.shelter.phone_number}
                    donationType={shelterRequests.food_category}
                />
                ))}
            </div>
        </div>
        </div>

    );
};

export default AdminView;