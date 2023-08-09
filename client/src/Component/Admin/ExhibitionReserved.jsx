import React, { useEffect, useState } from 'react';
import AdminNav from '../NavBar/AdminNav';

const ExhibitionReserved = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch('http://localhost:5000/reserve/view-vishnu')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <>
      <AdminNav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="jobcategory">
              <div className="card panel-table">
                <div className="card-header" style={{ textAlign: 'center' }}>
                  <h2>Reserved Users</h2>
                </div>
                <div className="card-body">
                  <table
                    className="table table-striped table-bordered table-list"
                    style={{
                      maxWidth: '900px', // Adjust the maximum width as needed
                      margin: '0 auto', // Center the table
                      fontSize: '16px', // Adjust font size
                    }}
                  >
                    <thead>
                      <tr>
                        <th>SL No</th>
                        <th>User</th>
                        <th>Exhibition Name</th>
                        <th>Booking ID</th>
                        <th>No. of Adults</th>
                        <th>No. of Children</th>
                        <th>Phone</th>
                        <th>Check In Date</th>
                        <th>Check Out Date</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentUsers.map((user, index) => (
                        <tr key={index}>
                          <td>{indexOfFirstUser + index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.eventName}</td>
                          <td>{user.bookingid}</td>
                          <td>{user.adults}</td>
                          <td>{user.children}</td>
                          <td>{user.phone}</td>
                          <td>{user.checkin}</td>
                          <td>{user.checkout}</td>
                          <td>{user.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Previous"
                onClick={() => handlePageClick(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={() => handlePageClick(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ExhibitionReserved;
