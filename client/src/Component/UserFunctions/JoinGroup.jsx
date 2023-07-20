import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from '../NavBar/UserNav';
import Pagination from 'react-bootstrap/Pagination';

const JoinGroup = () => {
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    axios
      .get('http://localhost:5000/group/view-approvedgroups')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const user_id = localStorage.getItem('user_id');
  const join = (id) => {
    axios
      .get(`http://localhost:5000/register/joingroup/${user_id}/${id}`)
      .then((response) => {
        console.log('response:', response);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <>
      <UserNav />
      <div className="artbody">
        <div className="container py-5">
          <div className="row text-center text-white mb-5">
            <div className="col-lg-7 mx-auto">
              <h1 className="display-4">Art Communities</h1>
            </div>
          </div>
          <div className="row">
            {currentItems.map((user) => (
              <div className="col-lg-9" key={user._id}>
                <ul className="list-group shadow">
                  <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                      <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">{user.groupname}</h5>
                        <p className="font-italic text-muted mb-0 small">
                          {user.description}
                        </p>
                        <div className="d-flex align-items-center justify-content-between mt-1">
                          <img
                            src={`/upload/${user.coverphoto}`}
                            alt="Generic placeholder image"
                            width={100}
                            className="artimg ml-lg-5 order-1 order-lg-2"
                          />
                          <button className="btn btn-danger btn-lg" style={{ width: 100 }} onClick={()=>{join(user._id)}}>
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Pagination>
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {Array.from(Array(Math.ceil(category.length / itemsPerPage)).keys()).map((page) => (
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
                disabled={currentPage === Math.ceil(category.length / itemsPerPage)}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGroup;
