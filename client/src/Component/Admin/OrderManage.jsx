import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';

const OrderManage = () => {
  return (
    <>
      <label className='text-center' style={{ fontSize: '30px' }}>Manage Order</label>
      <hr></hr>

      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>OrderId</th>
            <th scope='col'>User</th>

            <th scope='col'>Total</th>
            <th scope='col'>OrderdDate</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>

          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <p className='fw-bold mb-1'>order#1</p>
              </div>
            </td>
            <td>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>

            </td>



            <td>
              <p>$1290</p>
            </td>
            <td>
              <p>12-3-2023</p>
            </td>
            <td>
              <select className="form-select" aria-label="Status">
                <option value="delivered">Delivered</option>
                <option value="not-delivered">Not Delivered</option>
              </select>
            </td>
            <td>
              <MDBBtn color='link' rounded size='sm'>
                <i class="fa fa-trash" style={{ color: "black", fontSize: "20px", marginLeft: "10px" }}></i>
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default OrderManage;
