import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestarauntTicket from '../components/RestarauntTicket';

const AdminView = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchTickets = async () => {
            try {
                // Replace with the actual API URL and authentication method
                const response = await axios.get('http://localhost:8000/api/tickets/list_unchecked_tickets/', 
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

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
  <h1>Admin Dashboard</h1>
  <h2>Tickets</h2>

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

    );
};

export default AdminView;
