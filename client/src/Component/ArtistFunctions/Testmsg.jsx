import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Testmsg = () => {
  const artistLognId = localStorage.getItem('login_id');
  const [artistdetails, setartistdetails] = useState([]); // Initialize as an empty array

  useEffect(() => {
    axios
      .get(`http://localhost:5000/chat/viewusers-chat`)
      .then((response) => {
        setartistdetails(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">Messages</h3>
        <div className="card mt-4">
          <div className="card-body">
           console.log(artistdetails)
           
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmsg;