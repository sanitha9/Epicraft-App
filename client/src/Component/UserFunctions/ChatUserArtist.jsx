
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
const ChatUserArtist = () => {
  const [chat, setChat] = useState([]);
  const { id } = useParams();
  const login_id = localStorage.getItem('login_id');
  const[inputs, setinputs]=useState({
    login_id:login_id,
    artistloginid:id
});
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit = (event) => {
    event.preventDefault();
  
    axios.post(`http://localhost:5000/chat/chat`, inputs)
      .then((response) => {
        toast.success('Your added a message successfully!'); // Display success toast
        // navigate('/admin');
      })
      .catch((error) => {
        toast.error('An error occurred.'); // Display error toast
        console.error(error);
      });
  };


  useEffect(() => {
    axios.get('http://localhost:5000/chat/view-chat/${login_id}')
      .then((response) => {
        setChat(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);


  return (
    <>
      
       
      <div className="chatboxcontainer" style={{ marginTop: '100px' }}>
          <h3 className="text-center">Messaging</h3>
          <div className="messaging">



          <div className="inbox_msg" style={{marginTop:'100px'}}>
           
              
           <div className="type_msg">
             <div className="input_msg_write">
               <input
                 type="text"
                 className="write_msg" name='message'
                 placeholder="Type a message" onChange={setRegister}
                />
              <button  className="btn btn-danger btn-lg" type="submit"   value="send" style={{marginLeft: '500px'}} onClick={registersubmit}>
                      {/* <i className="fa fa-paper-plane-o" aria-hidden="false" /> */}
                    </button>
             </div>
           </div>


         </div>
            <div className="inbox_msg" style={{marginTop:'100px'}}>
           
              
                <div className="type_msg">
                  <div className="input_msg_write">
                    <p>nnmnmnmn</p>
                    
                    {/* <button className="msg_send_btn" type="button">
                      <i className="fa fa-paper-plane-o" aria-hidden="false" />
                    </button> */}
                   <label>Reply......</label> <p>jhfejhfjshfjesf</p>
                  </div>
                </div>


              </div>
            
            </div>
          </div>
       
      
    </>
  );
};

export default ChatUserArtist;
