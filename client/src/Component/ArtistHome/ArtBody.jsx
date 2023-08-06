
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import PublicUserFooter from '../Footer/PublicUserFooter';



const ArtBody = () => {
  
  const logid = localStorage.getItem('login_id');
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(5); // Number of items to display per page

// const artPictures = [
//     { id: 1, title: 'Artwork 1', imageUrl: 'https://img.freepik.com/free-photo/paint-brush-with-liquid-paint_144627-33549.jpg?size=626&ext=jpg&ga=GA1.1.1209395042.1683703087&semt=ais' },
//     { id: 2, title: 'Artwork 2', imageUrl: 'https://img.freepik.com/free-vector/fruit-background-with-watercolor-orange_23-2148210582.jpg?w=740&t=st=1686806313~exp=1686806913~hmac=2fb65ce4eb16c38fedf47ead44884e0a9c901205625740f3457676bc8447f96a' },
//     { id: 3, title: 'Artwork 3', imageUrl: 'https://img.freepik.com/free-vector/sticker-with-many-oranges-box_1308-61763.jpg?w=996&t=st=1686806349~exp=1686806949~hmac=99bf3427d362939c072461b25e3cec90c0b83b4362e998d8aa114959ec46e863' },
//     // Add more art pictures as needed
//   ];

const removeArtitem = (id) => {
  console.log(id);
  axios
    .delete(`http://localhost:5000/artitems/delete-artitems/${id}`)
    .then(() => {
      setCategory((prevEvents) => prevEvents.filter((event) => event._id !== id));
      toast.success('Art work deleted successfully!', {
        position: toast.POSITION.BOTTOM_CENTER, // Set the toast position to bottom center
      });
    })
    .catch((error) => {
      console.log('Error:', error);
      toast.error('Error deleting category!', {
        position: toast.POSITION.BOTTOM_CENTER, // Set the toast position to bottom center
      });
    });
};

  useEffect(() => {
    axios
    .get(`http://localhost:5000/artitems/view-artitems/${logid}`)
      // .get(`http://localhost:5000/artitems/view-artitems/${logid}`)
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);

  return (





 <>
 <ToastContainer/>
    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: "url(img/mr1.jpg)" }}
    >
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center">
          <h6
            className="display-3 text-white mb-3 animated slideInDown"
            style={{ fontSize: 30 }}
          >
            "The greatest artists are scientists as well"
            <br />
            -AlbertEiensteen
          </h6>
          {/* <h3>-Albert Einsten</h3> */}
          {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav> */}
        </div>
      </div>
    </div>
    {/* Page Header End */}
    {/* <div
      className="Btns"
      style={{ backgroundColor: "gold", width: "100rem", height: "5rem" }}
    >

      <button type="button" className="btn btn-info"style={{ marginRight:"40rem",width:"10rem"}}>
        Remove
      </button>
      <button type="button" className="btn btn-info" style={{ marginRight:50,width:"10rem"}}>
      Upload
      </button>
    
    </div> */}
    <div className="Btns" style={{ backgroundColor: "transparent", width: "100rem", height: "5rem" }}>
      <div className='row'>
        <div className='col-lg-12 d-flex justify-content-center gap-5 text-center mt-5'>
        <Link to={"/upload"}>
  <Button variant="primary" className="rounded-circle">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
      </svg>
    </Button></Link>
  {/* Instagram */}
  <Button variant="primary" className="rounded-circle" href="artCustomizeRequestView">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
    </Button>
 
   </div>
  <div className="row justify-content-center">
  <div className="col-md-3 d-flex justify-content-center gap-3 mt-5">
  {/* area for center items */}
  
  </div>
</div>
  </div>
  <div className="container">
  
      <div className="row" >
      {currentItems.map((art) => (
       
          <div key={art.id} className="col-md-4 mb-4">
            <div className="card">
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdownMenuicon">
        <i className="fas fa-ellipsis-v fa-lg text-dark"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu> 
      <Dropdown.Item>
  <Link to={`/editartitems/${art._id}`}>
    <i className="fas fa-cog pe-2"></i>Edit
  </Link>
</Dropdown.Item>

        <Dropdown.Item onClick={()=>{
                    removeArtitem(art._id);
                  }}>
          <i className="fas fa-trash pe-2"></i>Delete
        </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
              <img  src={`/upload/${art.image}`} className="card-img-top" alt={art.artname} />
              <div className="card-body">
              <h5 className="card-title">{art.artname}</h5>
                <h5 className="card-title">RS:{art.price}</h5>
                <p className="card-text">{art.description}</p>
             
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



    <div className="pagination-container d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: Math.ceil(category.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(category.length / itemsPerPage)}
        />
      </Pagination>
    </div>
</div>




  </>

  )
}

export default ArtBody