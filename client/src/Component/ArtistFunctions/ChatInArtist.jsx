import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatInArtist = () => {
   
   
    const [chat, setChat] = useState([]);
    const [user, setUsers] = useState([]);
    console.log(chat);
 

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/group/artistgrup/${login_id}`)
    //       .then((response) => {
    //         setChat(response.data.data);
    //       })
    //       .catch((error) => {
    //         console.log('Error:', error);
    //       });
    //   }, []);

   
    const login_id = localStorage.getItem('login_id');
    console.log(login_id);

      useEffect(() => {
        
        axios
          .get(`http://localhost:5000/chat/viewgroupusers/${login_id}`)
          .then((response) => {
            setChat(response.data.data);
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      },[] );

    
 
      const userlogId = chat.login_id;

      useEffect(() => {
    
        // console.log(userlogId);
           axios.get(`http://localhost:5000/register/view-chatusers/${login_id}`)
              .then((response) => {
                setUsers(response.data.data);
              })
              .catch((error) => {
                console.log('Error:', error);
              });
          }, [chat]);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">Messages</h3>
        <div className="card mt-4">
          <div className="card-body">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Users</th>
                 
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
              {user.map((user) => (
                <tr key={user.id}>
                   <td>{user.name}</td>
                  
                  <td className="text-center">
                  <button>reply</button>
                  </td>
                </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInArtist;
