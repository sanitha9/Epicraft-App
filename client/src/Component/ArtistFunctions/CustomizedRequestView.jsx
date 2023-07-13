
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const CustomizedRequestView = () => {
  const [customize, setCustomize] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/customize/view-customized')
      .then((response) => {
        setCustomize(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);





  return (
   <>
   <label style={{fontSize:"30px",marginLeft:"400px"}}>You have requested to customize the product</label>
   <hr></hr>
   


   <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Users</th>
          <th scope='col'>Attachment</th>
          <th scope='col'>Status</th>
          {/* <th scope='col'>Position</th> */}
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
          <img
                src='img/can3.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                
              />
            {/* <p className='fw-normal mb-1'>Software engineer</p> */}
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
            <MDBBadge color='success' pill>
              paid
            </MDBBadge>
          </td>
          {/* <td>Senior</td> */}
          <td>
            {/* <MDBBtn color='link' rounded size='sm'> */}
           
            <i className="fas fa-times" style={{color:"red",fontSize:"30px"}}></i>
          
          <i className="fas fa-check" style={{color:"green",fontSize:"30px",marginLeft:"10px"}}></i>
            {/* </MDBBtn> */}
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
          <img
                src='img/can3.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                
              />
          </td>
          <td>
            <MDBBadge color='primary' pill>
            nonpaid
            </MDBBadge>
          </td>
          {/* <td>Junior</td> */}
          <td>
            <MDBBtn color='link' rounded size='sm'>
            <i className="fas fa-times" style={{color:"red",fontSize:"30px"}}></i>
            <i className="fas fa-check" style={{color:"green",fontSize:"30px",marginLeft:"10px"}}></i>
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
          <img
                src='img/can3.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                
              />
          </td>
          <td>
            <MDBBadge color='warning' pill>
              processing
            </MDBBadge>
          </td>
          {/* <td>Senior</td> */}
          <td>
            <MDBBtn color='link' rounded size='sm'>
             
            <i className="fas fa-times" style={{color:"red",fontSize:"30px"}}></i>
            <i className="fas fa-check" style={{color:"green",fontSize:"30px",marginLeft:"10px"}}></i> 
            {/* Edit */}
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>


   
   </>
  )
}

export default CustomizedRequestView