import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import axios from 'axios';

const GroupAccept = () => {
  const login_id = localStorage.getItem('login_id');
  
  const [artistgroupdetils, setArtistGroupdetils] = useState([]);
  const [usergroupdetils, setUserGroupdetils] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/group/artistgrup/${login_id}`)
      .then((response) => {
        setArtistGroupdetils(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  useEffect(() => {
    if (artistgroupdetils._id) {
      const artistgroupid = artistgroupdetils._id;
      console.log(artistgroupid);
      axios
        .get(`http://localhost:5000/register/groupuserdeatils/${artistgroupid}`)
        .then((response) => {
          setUserGroupdetils(response.data.data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
      
    }
  }, [artistgroupdetils]);

 


  const approve = (id) => {
   console.log(id);
    axios
      .get(`http://localhost:5000/register/approveuseringroup/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const id = usergroupdetils.login_id;
  const reject = (id ) => {
    axios
      .get(`http://localhost:5000/register/rejectuseringroup/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
      <label style={{ fontSize: "30px", marginLeft: "500px" }} className='d-flex align-items-center'>Group Members</label>
      <hr></hr>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Users</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {usergroupdetils.map((user) => (
            <tr key={user.id}>
              
              <td>
                <div className='d-flex align-items-center'>
                  {/* <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  /> */}
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{user.name}</p>
                    <p className='text-muted mb-0'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="text-center">
              {user.groupstatus === '0' ? (
                <>
                  <button className="btn btn-success btn-sm mr-1" style={{ marginRight: '5px' }} onClick={() => {
                    approve(user._id);
                  }}>
                    <span className="glyphicon glyphicon-ok" /> Approve
                  </button>
                  <button className="btn btn-danger btn-sm mr-1 delete-btn" onClick={() => {
                    reject(user._id);
                  }}>
                    <span className="glyphicon glyphicon-remove" /> Delete
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-success ">Approved</button>
                </>
              )}
            </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}

export default GroupAccept;
