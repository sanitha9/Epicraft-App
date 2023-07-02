import React from 'react';
import { Button } from 'react-bootstrap';

const CreateGroup = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(img/artevent.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '800px',
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
          <h2 style={{ marginLeft: "80px" }}>Create Group</h2>
          <form>
            <label htmlFor="groupname">Group Name:</label>
            <input type="text" id="groupname" name="groupname" />

            <label htmlFor="coverphoto">Upload a cover photo:</label>
            <input type="file" id="coverphoto" name="coverphoto" />

            <div>
              <label htmlFor="options">privacy</label>
              <select id="options" name="options">
                <option value="">public</option>
                <option value="option1">private</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />

            <button type="submit" style={{ marginLeft: "40%", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateGroup;
