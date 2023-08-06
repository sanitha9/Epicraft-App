import React, { useEffect, useState } from 'react';
import PublicUserFooter from '../Footer/PublicUserFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [Groupdetails, setGroupdetails] = useState([]);
  const [users, setUsers] = useState([]);
  const [SelectedArtist, setSelectedArtist] = useState([]);

  const user_id = localStorage.getItem('user_id');
  console.log(user_id);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/register/userdeatils/${user_id}`)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [user_id]);

  useEffect(() => {
    if (users.group) {
      axios
        .get(`http://localhost:5000/group/groupdeatils/${users.group}`)
        .then((response) => {
          setGroupdetails(response.data.data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, [users.group]);

  useEffect(() => {
    if (Groupdetails.login_id) {
      axios
        .get(`http://localhost:5000/register/view-artist/${Groupdetails.login_id}`)
        .then((response) => {
          setSelectedArtist(response.data.data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, [Groupdetails.login_id]);

  return (
    <>
      {/* <Usernav /> */}
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          {SelectedArtist.map((art) => (
            <React.Fragment key={art.id}>
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  {/* Display applicant image here */}
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="/img/2.jpg"
                    alt="Applicant"
                  />
                  {/* <span className="font-weight-bold">firstname</span>
                <span className="text-black-50">category.email</span> */}
                  <span> </span>
                </div>
              </div>
              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-mt-1">
                      <label className="labels">Name : {art.name} </label> 
                     
                    </div>
                    <div className="row mt-1">
                      <label className="labels">Email: {art.email}</label>
                     
                    </div>
                    <div className="row mt-1">
                      <label className="labels">Mobile: {art.mobile}</label>
                     
                    </div>
                    <div className="row mt-1">
                      <label className="labels">Address: {art.address}</label>
                     
                    </div>
                    <div className="row mt-1">
                      <label className="labels">Gender: {art.gender}</label>
                     
                    </div>
                    <div className="row mt-1">
                      <label className="labels">Reg Id: {art._id}</label>
                     
                    </div>
                  </div>
                  {/* Rest of the profile details go here */}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <PublicUserFooter />
    </>
  );
};

export default Profile;
