import React from 'react';
import AdminNav from '../NavBar/AdminNav';

const UpcomingEventAdminView = () => {
  return (
    <>
    <AdminNav/>
    <div className="card">
  <img src="img/bg1.jpg" alt="Exhibition"className="card-image-large" />
  <div className="card-content">
    <h3 className="card-category">Exhibition 1</h3>
    <p className="card-date">Date: 34-97-00</p>
    <p className="card-rate">Ticket Rate: 567</p>
    <p className="card-rate">Location:calicut</p>
    <p className="card-description">Description:cbdjhjdfhjbcnxbcjhdfhjd</p>
    <div className="card-actions">
      <button className="edit-button">Edit</button>
      <span className="button-space"></span>
      <button className="delete-button">Cancel</button>
    </div>
  </div>
</div>

<div className="card">
  <img src="img/bg1.jpg" alt="Exhibition"className="card-image-large"/>
  <div className="card-content">
    <h3 className="card-category">Exhibition 2</h3>
    <p className="card-date">Date: 34-97-00</p>
    <p className="card-rate">Ticket Rate: 567</p>
    <p className="card-rate">Location:calicut</p>
    <p className="card-description">Description:cbdjhjdfhjbcnxbcjhdfhjd</p>
    <div className="card-actions">
      <button className="edit-button">Edit</button>
      <span className="button-space"></span>
      <button className="delete-button">Cancel</button>
    </div>
  </div>
</div>
      </>
    
  );
};

export default UpcomingEventAdminView;
