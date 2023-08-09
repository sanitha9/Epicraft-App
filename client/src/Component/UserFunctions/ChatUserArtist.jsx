import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import UserNav from '../NavBar/UserNav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const ChatUserArtist = () => {
  const [chat, setChat] = useState([]);
  const { id } = useParams();
  const login_id = localStorage.getItem('login_id');
  const [inputs, setInputs] = useState({
    login_id: login_id,
    artistloginid: id,
    message: '',
  });

  const setRegister = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const registersubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/chat/chat', inputs);
      toast.success('Your added a message successfully!');
    } catch (error) {
      toast.error('An error occurred.');
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/chat/view-chat/${login_id}`)
      .then((response) => {
        setChat(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [login_id]);

  return (
    <>
    <UserNav/>
      <div className="chatboxcontainer" style={{ marginTop: '100px', maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg" style={{ marginTop: '50px' }}>
            <div className="type_msg">
              <div className="input_msg_write">
                <input
                  type="text"
                  className="write_msg"
                  name="message"
                  placeholder="Type a message"
                  onChange={setRegister}
                  value={inputs.message}
                  style={{ padding: '10px', width: '80%', marginRight: '10px',color:'blue',fontStyle:'bold' }}
                />
                <button
                  className="btn btn-danger btn-lg"
                  type="submit"
                  value="send"
                  onClick={registersubmit}
                  style={{ padding: '10px', width: '100px', fontSize: '16px' ,marginLeft:'670px'}}
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          <div>
            {chat.map((messageData, index) => (
              <div className="inbox_msg" key={index} style={{ marginTop: '50px', background: '#f9f9f9', padding: '10px' }}>
                <div className="type_msg">
                  <div className="input_msg_write">
                    <label>Your Message:</label>
                    <p>{messageData.message}</p>
                    <label>Reply:</label>
                    <p>{messageData.reply}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer style={{ fontSize: '16px' }} />
      {/* <PublicUserFooter/> */}
    </>
  );
};

export default ChatUserArtist;
