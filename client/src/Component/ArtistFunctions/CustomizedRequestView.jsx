import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Pagination from 'react-bootstrap/Pagination';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useParams } from 'react-router-dom';

const CustomizedRequestView = () => {
  const { id } = useParams();
const artist_id = localStorage.getItem('artist_id')
  const [customize, setCustomize] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/customize/view-customized-artist/${artist_id}`)
      .then((response) => {
        setCustomize(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customize.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const approve = (id) => {
    axios
      .get(`http://localhost:5000/customize/approve-work/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const finish = (id) => {
    axios
      .get(`http://localhost:5000/customize/finish-work/${id}`)
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
      <label style={{ fontSize: '30px', marginLeft: '400px' }}>You have requested to customize the product</label>
      <hr />

      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Users</th>
            <th scope='col'>Attachment</th>
            <th scope='col'>Status</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {currentItems.map((user) => (
            <tr key={user._id}>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{user.customize.name}</p>
                    <p className='text-muted mb-0'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <a href={`/upload/${user.design}`} download>
                  <img src={`/upload/${user.design}`} alt='' style={{ width: '45px', height: '45px' }} />
                </a>
              </td>
              <td>
                <MDBBadge color='success' pill>
                  paid
                </MDBBadge>
              </td>
              <td>
                {user.status === '0' ? (
                  <OverlayTrigger placement='top' overlay={<Tooltip id={`tooltip-check-${user._id}`}>Accept</Tooltip>}>
                    <i
                      className='fas fa-check'
                      style={{ color: 'green', fontSize: '30px', cursor: 'pointer', marginRight: '10px' }}
                      onClick={() => {
                        approve(user._id);
                      }}
                    ></i>
                  </OverlayTrigger>
                ) :
                user.status === '1' ?

                
                (
                  <button className='btn btn-success' onClick={() => {
                    finish(user._id);
                  }} >
                    Finish
                  </button>
                ):
                <button className='btn btn-success' disabled>
                Completed
              </button>
                }
              </td>
            </tr>
          ))}

          {/* Pagination */}
          <tr>
            <td colSpan='4'>
              <Pagination className='justify-content-center'>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from(Array(Math.ceil(customize.length / itemsPerPage)).keys()).map((page) => (
                  <Pagination.Item
                    key={page + 1}
                    active={page + 1 === currentPage}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {page + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === Math.ceil(customize.length / itemsPerPage)}
                />
              </Pagination>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default CustomizedRequestView;
