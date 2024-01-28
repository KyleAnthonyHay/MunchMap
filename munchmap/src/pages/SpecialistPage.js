import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const SpecialistPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tickets/list_unchecked_tickets/', {
          headers: { Authorization: `Token ${token}` }
        });
        setTickets(response.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchTickets();
  }
  , []);

  const handleCheck = async (ticketId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(`http://localhost:8000/api/tickets/${ticketId}/check_ticket/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }





  return (
    <div>
      {tickets.map((ticket) => (
        <li key={ticket.id}>
          <h1>{ticket.name}</h1>
          <h2>{ticket.restaurant.location}</h2> 
          <h3>{ticket.food_category}</h3>
          <h4>{ticket.quantity}</h4>
          <button onClick={() => handleCheck(ticket.id)}>Check</button>
        </li>
      )
      )}
    </div>
  )
}

export default SpecialistPage