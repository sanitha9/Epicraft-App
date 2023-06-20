


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
          <h2 style={{marginLeft:"80px"}}>Upload Event Details</h2>
          <form>
            <label htmlFor="name">EventName:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" />
            <label htmlFor="name">Price/seat</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="message">Comments:</label>
            <textarea id="message" name="message" rows="4" cols={60}></textarea>
            <label htmlFor="file">Upload your poster here:</label>
            <input type="file" id="file" name="file"  />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAnEvent;

// import React from 'react'
// import { Button } from 'react-bootstrap'

// const CreateAnEvent = () => {
//   return (
//    <>
  
//    <div style={{ 
//       backgroundImage: `url(img/artevent.jpg)`,
//       backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           width: '100%',
//           height: '800px', 
//     }}>
//     <div style={{display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     background: '#f1f1f1',
//     marginTop:"1rem"
//   }}>
//       <div style={{width: '600px',
//     padding: '20px',
//     background: '#fff',
//     boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
//     borderRadius: '4px'}}>
//         <h2>Upload Event Details</h2>
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" />

//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" />

//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" rows="4"></textarea>

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//  </div>
//    </>
//   )
// }

// export default CreateAnEvent