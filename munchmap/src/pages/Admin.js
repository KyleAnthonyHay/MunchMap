import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestarauntTicket from '../components/RestarauntTicket';
import './Admin.css';
import ShelterTicket from '../components/ShelterTicket';

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

    const shelters = [
        {
            ticketNumber: '0015',
            name: 'Urban Family Center',
            location: '130 Baruch Pl, New York, NY 10003',
            contactInfo: 'info@henrystreet.org | (212) 766-9200',
            donationType: 'Can Food',
        },
        {
            ticketNumber: '0019',
            name: 'The Kensington Family Shelter',
            location: '385 McDonald Ave, Brooklyn, NY 11218',
            contactInfo: 'info@camba.org | (718) 226-0425',
            donationType: 'Non-Perishables',
        },
        {
            ticketNumber: '0016',
            name: 'Mainchance Drop-In Center',
            location: '120 East 32nd Street, New York, NY 10016',
            contactInfo: 'admin@gcnssc.org | (212) 883-0680 Ext. 108',
            donationType: 'Vegetables',
        },
        {
            ticketNumber: '0017',
            name: 'Project Renewal',
            location: '225 E 45th St, New York, NY 10017',
            contactInfo: 'Anat Gerstein or Zac Roy | (212) 661-8934',
            donationType: 'Vegetables',
        },
        {
            ticketNumber: '0018',
            name: 'The Landing Family Shelter',
            location: '94-00 Ditmars Blvd, East Elmhurst, NY 11369',
            contactInfo: 'info@camba.org | (718) 226-0414',
            donationType: 'Non-Perishables',
        },
        {
            ticketNumber: '0020',
            name: 'Siena House',
            location: '85 W 168th St, Bronx, NY 10452',
            contactInfo: 'Info@SienaHouseShelter.org | (718) 293-2390',
            donationType: 'Can Food',
        },
        // Add more shelters as needed
    ];
    return (
        <div className="admin-view">
            {/* <h1>Admin Dashboard</h1>
            <h2>Tickets</h2> */}
            {/* ******************************** Restaurant Tickets ******************************** */}
            <div className="admin-list">
            <h2>Restaraunt Tickets</h2>
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
            <div className="admin-list">
                <h2>Shelter Tickets</h2>
                {shelters.map((shelter, index) => (
                    <ShelterTicket
                    key={index}
                    ticketNumber={shelter.ticketNumber}
                    name={shelter.name}
                    location={shelter.location}
                    contactInfo={shelter.contactInfo}
                    donationType={shelter.donationType}
                />
                ))}
            </div>
        </div>

    );
};

export default AdminView;
