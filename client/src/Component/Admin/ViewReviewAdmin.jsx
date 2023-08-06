import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import AdminNav from '../NavBar/AdminNav';

const ViewReviewAdmin = () => {
  const [review, setReview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('http://localhost:5000/comment/viewuser-comment')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReview(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = review.slice(indexOfFirstItem, indexOfLastItem);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <AdminNav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="jobcategory">
              <div className="card panel-table">
                <div className="card-header" style={{ textAlign: 'center' }}>
                  <h2>Reviews</h2>
                  <div className="row" />
                </div>
                <div className="card-body">
                  <table className="table table-striped table-bordered table-list">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Reviewed Item</th>
                        <th>Review Issued Date</th>
                        <th>Review Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((reviewItem, index) => (
                        <tr key={index}>
                          <td>{reviewItem.name}</td>
                          <td>{reviewItem.artname}</td>
                          <td>{reviewItem.date}</td>
                          <td>{reviewItem.comment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-center">
                    <Pagination>
                      {Array.from({ length: Math.ceil(review.length / itemsPerPage) }).map(
                        (item, index) => (
                          <Pagination.Item
                            key={index}
                            active={index + 1 === currentPage}
                            onClick={() => handlePagination(index + 1)}
                          >
                            {index + 1}
                          </Pagination.Item>
                        )
                      )}
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewReviewAdmin;
