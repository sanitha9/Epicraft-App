import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';

import ArtNav from '../NavBar/ArtNav';

const Testmsg = () => {
  const artistLognId = localStorage.getItem('login_id');
  const [artistdetails, setArtistdetails] = useState([]);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5; // Number of messages to display per page

  useEffect(() => {
    axios
      .get(`http://localhost:5000/chat/viewusers-chat/${artistLognId}`)
      .then((response) => {
        const responseData = response.data;
        if (responseData.success && !responseData.error && responseData.data) {
          setArtistdetails(responseData.data); // Update to set the array directly
        } else {
          console.log('Invalid data format:', responseData);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const id = artistdetails.length > 0 ? artistdetails[0]._id : null;
  console.log(id);

  // Function to handle the "reply" button click and show the reply form
  const handleReplyClick = () => {
    setShowReplyForm(true);
  };

  // Function to handle form submission and sending the reply message
  const handleSubmit = (event) => {
    event.preventDefault();

    // Your code to send the reply message to the server using axios
    axios
      .put(`http://localhost:5000/chat/reply/${id}`, {
        reply: replyMessage,
      })
      .then((response) => {
        // Handle the response from the server (if needed)
        console.log('Reply sent successfully:', response.data);

        // After sending the reply, close the reply form
        setShowReplyForm(false);
        setReplyMessage('');
      })
      .catch((error) => {
        console.log('Error sending reply:', error);
      });
  };

  // Styling for the "reply" button
  const buttonStyle = {
    backgroundColor: '#007bff', // Blue background color
    color: '#fff', // White text color
    padding: '8px 16px', // Padding on the top and bottom, and left and right
    borderRadius: '4px', // Rounded corners
    cursor: 'pointer', // Show hand cursor on hover
    marginTop: '8px', // Some top margin
    display: 'block', // Set display to block
    margin: 'auto', // Center the button horizontally
  };

  // Calculate the indexes for the messages to be displayed on the current page
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = artistdetails.slice(indexOfFirstMessage, indexOfLastMessage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ArtNav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3 className="text-center mt-4">Messages</h3>
            <div className="card mt-4">
              <div className="card-body">
                {currentMessages.length > 0 ? (
                  <Accordion defaultActiveKey="0">
                    {currentMessages.map((art, index) => (
                      <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>{art.name}</Accordion.Header>
                        <Accordion.Body>
                          {art.message}
                          <button
                            style={buttonStyle}
                            onClick={handleReplyClick}
                            className="reply-button"
                          >
                            reply
                          </button>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                ) : (
                  <p>No messages found for this artist.</p>
                )}
              </div>
            </div>

            {/* Popup Reply Form */}
            {showReplyForm && (
              <div className="popup-form">
                <form onSubmit={handleSubmit}>
                  <label>
                    Enter your reply message:
                    <input
                      type="text"
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                    />
                  </label>
                  <button type="submit" className="send-reply-button">
                    Send Reply
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReplyForm(false)}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}

            {/* Pagination */}
            {artistdetails.length > messagesPerPage && (
              <div className="text-center mt-4">
                <Pagination>
                  {Array.from({ length: Math.ceil(artistdetails.length / messagesPerPage) }).map(
                    (item, index) => (
                      <Pagination.Item
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                        className="pagination-button"
                      >
                        {index + 1}
                      </Pagination.Item>
                    )
                  )}
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testmsg;
