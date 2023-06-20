import React from 'react';
import { useState } from 'react';
import {CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import Button from 'react-bootstrap/Button';
const UpcomingEventsArtist = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
          <div className="input-group rounded">
  <input
    type="search"
    className="form-control rounded"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="search-addon"
  />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search" />
  </span>
</div>


          </div>
          
          <div style={{ display: 'flex', // Use flexbox
            justifyContent: 'space-between', }}>
          <div className="dropdown">
            <CDropdown>
              <CDropdownToggle color="secondary" width={"10rem"}>Dates</CDropdownToggle>
              <CDropdownMenu className="custom-dropdown-menu">
                <CDropdownItem href="#">Today</CDropdownItem>
                <CDropdownItem href="#">Tomorrow</CDropdownItem>
                <CDropdownItem href="#">This Weekend</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
          
          <div className="dropdown">
            <CDropdown>
              <CDropdownToggle color="secondary" width={"10rem"}>Locations</CDropdownToggle>
              <CDropdownMenu className="custom-dropdown-menu">
                <CDropdownItem href="#">City A</CDropdownItem>
                <CDropdownItem href="#">City B</CDropdownItem>
                <CDropdownItem href="#">City C</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
          
          <div className="dropdown">
            <CDropdown>
              <CDropdownToggle color="secondary" width={"10rem"}>Categories</CDropdownToggle>
              <CDropdownMenu className="custom-dropdown-menu">
                <CDropdownItem href="#">Paintings</CDropdownItem>
                <CDropdownItem href="#">Crafts</CDropdownItem>
                <CDropdownItem href="#">Murels</CDropdownItem>
                <CDropdownItem href="#">WoodenWorks</CDropdownItem>
                <CDropdownItem href="#">BottleArts</CDropdownItem>
                <CDropdownItem href="#">Drawings</CDropdownItem>
                <CDropdownItem href="#">Others</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
        </div>
   
    </div>
    </div>
      <section className="pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="mb-3">Popular Events </h3>
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
          className="btn btn-primary mb-3 "
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right" />
        </a>
      </div>
      <div className="col-12">
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card" style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/eh2.jpg" style={{width:"280px",height:"500px"}}
                    />
                 
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"2px"}}>BookNow</Button>
        
          
       
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      
                      src="img/exb1.jpg" style={{width:"280px",height:"470px"}}
                    />
                 
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        
          
       
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card" style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/ex4.jpg" style={{width:"280px", height:"500px"}}
                    />
                
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"2px"}}>BookNow</Button>
        
          
        
        </p>
      </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/ex6.jpg"
                    />
                  
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"2px"}}>BookNow</Button>
        
       
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/exb1.jpg"
                    />
                  
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        
          
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/fe.jpg"
                    />
                
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        

        </p>
      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/ex6.jpg"
                    />
                  
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"2px"}}>BookNow</Button>
        
       
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/exb1.jpg"
                    />
                  
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        
          
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/fe.jpg"
                    />
                
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        

        </p>
      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/ex6.jpg"
                    />
                
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        </p>
          
    
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/exb1.jpg"
                    />
            
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        
     
        </p>
      </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card"style={{height:"600px"}}>
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="img/ex4.jpg"style={{width:"280px",height:"470px"}}
                    />
             
                     <div className="card-body">
        <h5 className="card-title">Fri 2 June<br/> Rs.100</h5>
        <p className="card-text">
        
        <Button style={{width:"16rem",marginTop:"-11px"}}>BookNow</Button>
        
          
      
        </p>
      </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  

    </>
  );
};

export default UpcomingEventsArtist;
