import React, { useEffect, useState,useRef  } from 'react';
import axios from 'axios';
import {CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {





  const [category, setCategory] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { slide } = window.bootstrap.Carousel.getOrCreateInstance(
          carouselRef.current
        );
        slide('next');
      }
    },2); // Adjust the interval time (in milliseconds) according to your needs

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const images = [
      'img/eh2.jpg',
      'img/exb1.jpg',
      'img/ex4.jpg',
      'img/ex6.jpg',
      'img/exb1.jpg',
      'img/fe.jpg',
    ];
  const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };


    useEffect(() => {
      axios
        .get('http://localhost:5000/exhibition/user-view-event')
        .then((response) => {
          const data = response.data;
          if (data.success) {
            setUsers(data.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }, []);
  


    useEffect(() => {
      axios.get('http://localhost:5000/category/view-category')
        .then((response) => {
          setCategory(response.data.data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }, []);


    const filteredUsers = users.filter((user) =>
    user.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div
      style={{
        backgroundImage: `url(img/artUp.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '800px',
        position: 'relative',
      }}>
        <span
         style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '20%',
          left: '50%',
        fontSize:66,
      color:'white',

      }}
       >
          Exhibition itself is an Art!</span>
     
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          padding: '30px',
          background: 'grey',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
         // Arrange items horizontally
          
        }}
      >
     <div className='row'>
          <div className='input-group rounded'>
            <input
              type='search'
              className='form-control rounded'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='search-addon'
              value={searchTerm} // Set the value of the input field to the search term state
              onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state on input change
            />
            <span className='input-group-text border-0' id='search-addon'>
              <i className='fas fa-search' />
            </span>
          </div>
        </div>


        </div>       <div className='row'>
 
        
        <div style={{ display: 'flex', // Use flexbox
          justifyContent: 'space-between', }}>
        {/* <div className="dropdown">
          <CDropdown>
            <CDropdownToggle color="secondary" width={"10rem"}>Dates</CDropdownToggle>
            <CDropdownMenu className="custom-dropdown-menu">
              <CDropdownItem href="#">Today</CDropdownItem>
              <CDropdownItem href="#">Tomorrow</CDropdownItem>
              <CDropdownItem href="#">This Weekend</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div> */}
        
        {/* <div className="dropdown">
          <CDropdown>
          <CDropdownToggle color="secondary" width="10rem">
                  Location
                </CDropdownToggle>
                <CDropdownMenu className="custom-dropdown-menu">
                  {users.map((data) => (
                    <CDropdownItem key={data._id} href="#">
                      {data.location}
                    </CDropdownItem>
                  ))}
                </CDropdownMenu>
          </CDropdown>
        </div> */}
        
        {/* <div className="dropdown">
          <CDropdown>
          
                <CDropdownToggle color="secondary" width="10rem">
                  Categories
                </CDropdownToggle>
                <CDropdownMenu className="custom-dropdown-menu">
                  {category.map((data) => (
                    <CDropdownItem key={data._id} href="#">
                      {data.categoryname}
                    </CDropdownItem>
                  ))}
                </CDropdownMenu>
              </CDropdown>
              
         
        </div> */}
      </div>
 
  </div>
  </div>
  <section className="pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="mb-3">Popular Events</h3>
      </div>
      <div className="col-6 text-right">
        <a
          className="btn btn-primary mb-3 mr-1"
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left" />
        </a>
        <a
          className="btn btn-primary mb-3"
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right" />
        </a>
      </div>
      <div className="col-12">
      {filteredUsers && filteredUsers.length > 0 ? (
            <div
              id='carouselExampleIndicators2'
              className='carousel slide'
              data-ride='carousel'
            >
        {/* {users && users.length > 0 ? (
          <div
            id="carouselExampleIndicators2"
            className="carousel slide"
            data-ride="carousel"
          > */}
          <div className="carousel-inner">
  {filteredUsers.map((user, index) => {
    const activeClass = index === 0 ? 'active' : '';
    if (index % 3 === 0) {
      return (
        <div className={`carousel-item ${activeClass}`} key={user._id}>
          <div className="row">
            {filteredUsers.slice(index, index + 3).map((userSlice) => (
              <div className="col-md-4 mb-3" key={userSlice._id}>
                <div className="card" style={{ height: "600px" }}>
                  <img
                    src={`/upload/${userSlice.image}`}
                    style={{ width: "280px", height: "500px" }}
                  />
                  <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px",fontStyle: "italic" }}>
    NAME: {userSlice.eventName}<br />
    Date: {userSlice.date}<br />
    Price Per Seat: {userSlice.priceSeat}<br/>
    Location: {userSlice.location}
  </h5>
                    <p className="card-text">
                      <Link to={`/reserve/${userSlice.priceSeat}/${userSlice._id}`}>
                        <Button style={{ width: "16rem", marginTop: "2px" ,marginLeft:'-12px'}}>
                          Reserve
                        </Button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  })}
</div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  </div>
</section>




  </>
  );
};

export default UpcomingEvents;