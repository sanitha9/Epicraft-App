import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CustomizeReq = () => {
  return (
   <>
   <div className='header'>
   <div
    className="container-fluid page-header mb-5 p-0"
    style={{ backgroundColor:"blue"}}
  >
    <div className="container-fluid page-header-inner py-5">
      <div className="container text-center">
        <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontSize:"30px"}}>
        All Of Life's Moments, Customized By You
        </h1>
       
      </div>
    </div>
  </div>


   </div>

<div className='row'>
  <div className="wedcard" style={{ width: "20rem",marginTop:"-2rem",marginLeft:"20rem"}}>
    <div className="card" >
      <img src="img/wed.jpg" style={{borderRadius:"80px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><a href={"wedding"}>Wedding</a></h5>
        <p className="card-text">
       
         
        </p>
      </div>
   
 </div>
</div>
<div className="birthcard" style={{ width: "20rem",marginTop:"-2.2rem",marginLeft:"100px"}}>
    <div className="card" >
      <img src="img/birthday.jpg" style={{borderRadius:"80px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><a href={"birthday"}>Birthday</a></h5>
        <p className="card-text">
       
         
        </p>
      </div>
   
</div>
</div> 
 
  




 
   <div className="motherscard" style={{ width: "20rem" ,marginLeft:"100px",marginTop:"-2.5rem"}}>
    <div className="card" >
      <img src="img/mothers.jpg" style={{borderRadius:"80px", width:"15rem"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><a href={"mothersday"}>Mother'sday</a></h5>
        <p className="card-text">
       
         
        </p>
      </div>
    </div>
 
    </div>




   
   <div className="othercard" style={{ width: "20rem",marginTop:"-2rem",marginLeft:"300px"}}>
    <div className="card" >
      <img src="img/others.jpg" style={{borderRadius:"80px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><a href={"othersday"}>OtherMoments</a></h5>
        <p className="card-text">
       
         
        </p>
      </div>
   
</div>
</div>
</div>
<div className='hrline'>
  <hr></hr>

</div>
<div className='corosl'>
<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="img/mo3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We help you to make all moments with your family are sweet and memorable!!</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="img/weddingw.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Make your wedding day most memorable moments with your partner!!</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/mpt.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Made for Mam.create gift as unique as she is!!!!</h3>
          {/* <p >
            Made for Mam.create gift as unique as she is!!!!
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
   </>
  )
}

export default CustomizeReq