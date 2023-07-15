import React from 'react';
import AdminNav from '../NavBar/AdminNav';

const ArtistRequestEvent = () => {


  
  const artistEvents = [
    {
      id: 1,
      image: 'event1.jpg',
      category: 'Category 1',
      date: 'Event Date 1',
      rate: 'Rate 1',
      description: 'Description 1',
    },
    {
      id: 2,
      image: 'event2.jpg',
      category: 'Category 2',
      date: 'Event Date 2',
      rate: 'Rate 2',
      description: 'Description 2',
    },
    // Add more artist events as needed
  ];

  return (
    <>
    <AdminNav/>
      <div className="row justify-content-center">
        {artistEvents.map((event) => (
          <div className="col-md-8 mb-5" key={event.id}>
            <div className="card">
              <img src={event.image} alt="Exhibition" className="card-image-large" />
              <div className="card-content">
                <h3 className="card-category">{event.category}</h3>
                <p className="card-date">{event.date}</p>
                <p className="card-rate">{event.rate}</p>
                <p className="card-description">{event.description}</p>
                <div className="card-actions">
                  <button className="edit-button">Approve</button>
                  <span className="button-space"></span>
                  <button className="delete-button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistRequestEvent;
