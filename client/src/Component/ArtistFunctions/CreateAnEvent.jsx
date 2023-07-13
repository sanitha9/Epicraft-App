import React from 'react';
import { Button } from 'react-bootstrap';

const CreateAnEvent = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(img/artevent.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '1300px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            padding: '30px',
            background: '#fff',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
            borderRadius: '4px',
          }}
        >
          <h2 style={{marginLeft:"80px"}}>Upload Event Details</h2>
          <form>
            {/* Input fields */}
            <label htmlFor="name">Event Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" />

            <label htmlFor="price">Price/Seat:</label>
            <input type="text" id="price" name="price" />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" />

            <label htmlFor="category">Category:</label>
            <select id="category" name="category">
              <option value="">Select a category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>

            <label htmlFor="message">Comments:</label>
            <textarea id="message" name="message" rows="4" cols={60}></textarea>

            <label htmlFor="file">Upload your poster here:</label>
            <input type="file" id="file" name="file" />

            <button type="submit" style={{ marginLeft: "40%" }}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAnEvent;
