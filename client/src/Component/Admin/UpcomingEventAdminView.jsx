import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNav from '../NavBar/AdminNav';

const UpcomingEventAdminView = () => {
  const [jobCategories, setEvent] = useState([]);
  const [category, setCategory] = useState([]);
  //  const[inputs, setinputs]=useState([]);
  const [users, setUsers] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const usersPerPage = 5;
  // const [event, setupcomingevent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/exhibition/view-event')
      .then((response) => {
        const data = response.data;
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);


  
  const removeEvent = (id) => {
    axios
      .delete(`http://localhost:5000/exhibition/delete-events/${id}`)
      .then(() => {
        setUsers((prevEvents) => prevEvents.filter((event) => event._id !== id));
        toast.success('Event deleted successfully!', {
          position: toast.POSITION.BOTTOM_CENTER, // Set the toast position to bottom center
        });
      })
      .catch((error) => {
        console.log('Error:', error);
        toast.error('Error deleting event!', {
          position: toast.POSITION.BOTTOM_CENTER, // Set the toast position to bottom center
        });
      });
  };




  useEffect(() => {
    axios.get('http://localhost:5000/category/view-category')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
console.log(users);
  return (
    <>
     <ToastContainer />
      <AdminNav />
      <ToastContainer />
      <div className="row justify-content-center">
        {users.map((user) => (
          <div className="col-md-8 mb-5" key={user._id}>
            <div className="card">
              <img src="img/bg1.jpg" alt="Exhibition" className="card-image-large" />
              <div className="card-content">
                <h3 className="card-category">ExhibitionName:{user.eventName}</h3>
                <p className="card-date">Date: {user.date}</p>
                <p className="card-rate">Location: {user.location}</p>
                <p className="card-rate">Price PerSeat: {user.priceSeat}</p>
                <p className="card-rate">Category:{user.categoryname}</p>
                <p className="card-description">Description:{user.description}</p>
                <div className="card-actions">
                  <button className="edit-button">Edit</button>
                  <span className="button-space"></span>
                  
                  <button className="delete-button"
                  onClick={()=>{
                    removeEvent(user._id);
                  }}
                  >Cancel</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingEventAdminView;
