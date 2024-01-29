import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'




const VolunteerPage = () => {
  const [shelterRequests, setShelterRequests] = useState([]);
  const [chosenShelterRequest, setChosenShelterRequest] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchShelterRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/shelter-requests/list_not_delivered_requests/', {
          headers: { Authorization: `Token ${token}` }
        });
        setShelterRequests(response.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchShelterRequests();
  }
  , []);


  const handleDeliver = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(`http://localhost:8000/api/shelter-requests/${chosenShelterRequest.id}/deliver_request/`, {}, {
        headers: { Authorization: `Token ${token}` }
      });
      console.log(response);
      setChosenShelterRequest(null);
    } catch (err) {
      console.log(err)
    }
  };



  return (
    <div>
      {shelterRequests.map((shelterRequest) => (
        <li key={shelterRequest.id}>
          <h1>{shelterRequest.shelter.name}</h1>
          <h2>{shelterRequest.shelter.location}</h2> 
          <h3>{shelterRequest.food_category}</h3>
          <h4>{shelterRequest.quantity}</h4>
        </li>
      )
      )}
    </div>
  )
}

export default VolunteerPage