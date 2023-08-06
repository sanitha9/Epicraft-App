import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import UserNav from '../NavBar/UserNav';
import PublicUserFooter from '../Footer/PublicUserFooter';

const Myorders = () => {
  const id = localStorage.getItem('login_id');
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // You can change this to adjust the number of items per page

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:5000/pay/view-myorder/${id}`);
        const data = await response.json();
        if (data.success) {
          setOrders(data.data);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchOrders();
  }, [id]);

  // Calculate current items to display based on currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Change the page number
  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // CSS styles for centering the pagination
  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px', // Add some spacing from the top
  };

  return (
    <>
    <UserNav/>
      <div className="orderlistbody">
        <h1 className="orderlisth1">My Order View List</h1>
        <ul className="order-list">
          {currentOrders.map((order) => (
            <li className="order-item" key={order.order_id}>
              <img src={`/upload/${order.image}`} alt={order.artname} />
              <div>
                <p className="product">Product: {order.artname}</p>
                <p className="price">Price: ${order.price}</p>
                <p className="quantity">Quantity: {order.quantity}</p>
                <p className="date">Order Date: {order.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <div style={paginationStyle}> {/* Add the pagination container with styles */}
          <Pagination className="pagination">
            {[...Array(Math.ceil(orders.length / itemsPerPage)).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => handlePaginationClick(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
      <PublicUserFooter/>
    </>
  );
};

export default Myorders;
