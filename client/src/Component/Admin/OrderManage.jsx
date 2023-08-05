import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const OrderManage = () => {
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pay/admin-myorder`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.data);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <label className='text-center' style={{ fontSize: '30px' }}>Manage Order</label>
      <hr></hr>

      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Sl No</th> {/* Added Sl No column */}
            <th scope='col'>OrderId</th>
            <th scope='col'>Customer Name</th>
            <th scope='col'>Product Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
            <th scope='col'>OrderdDate</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Orders.map((order, index) => ( // Added 'index' parameter to get the serial number
            <tr key={order._id}>
              <td>{index + 1}</td> {/* Displaying serial number */}
              <td>{order.order_id}</td>
              <td>{order.name}</td>
              <td>{order.artname}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', cursor: 'pointer' }}>Edit</button>
      <button style={{ padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
    </td>

            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default OrderManage;
