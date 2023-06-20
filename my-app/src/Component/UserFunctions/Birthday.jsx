import React from 'react'
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { alignPropType } from 'react-bootstrap/esm/types';
const Birthday = () => {
    return (
      <>
<div
    className="container-fluid page-header mb-5 p-0"
    style={{ backgroundImage: `url('img/birthday.jpg')` }}

  >
    <div className="container-fluid page-header-inner py-5">
      <div className="container text-center">
        <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontSize:"30px"}}>
        Make your birthday wishes more Memorable with us!!
        </h1>
       
      </div>
    </div>

  </div>
    
  <div className='contn' style={{textAlign:"center",fontSize:"20px"}}>

<p>Please share the informations of your big day so we can help you along your b'day wishes more special!!</p>
<hr></hr>
<div style={{ display: 'block', 
                  width: 700,height:900, 
                  marginLeft:"380px" }}>
     
      <Form>
      <Form.Group>
          <Form.Label>Wishes send to:</Form.Label>
          <Form.Control type="text" 
                        placeholder="B'day boy/girl" />
        </Form.Group>
      <Form.Group>
          <Form.Label>Wishes send by:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Your Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Birthday Date</Form.Label>
          <Form.Control type="date"placeholder="Enter wedding date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text"placeholder="Contact No" />
        </Form.Group>
        <Form.Group>
  <Form.Label>Comments your idea here:</Form.Label>
  <Form.Control as="textarea" placeholder="Enter your ideas here.." />
</Form.Group>
<Form.Group>
  <Form.Label>Upload your design/photo here:</Form.Label>
  <Form.Control as="file" placeholder="Enter your ideas here.." />
</Form.Group>

        <Button variant="primary" type="submit" style={{ width: "8rem",marginRight:"250px",marginTop:"1rem" }}>
           submit
        </Button>
        
      </Form>
    </div>
      <br />
   

    </div>
  
   <div className='bottom'>
    <hr></hr><p style={{textAlign:"center",fontSize:"1rem"}}>
    -A preview of your design will be emailed to you within 1 working day.<br/>
           -You can either confirm the design or ask for changes on it.<br/>
      -Once design is confirmed, it will be shipped out & delivered within 2-4 working days.<br/></p>
      <hr></hr>
    <p style={{textAlign:"center",fontSize:"2rem"}}>Top customized Birthday Gifts..</p>
    <hr></hr>
    {/* <table>
  <div className="design1">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/gift.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
        <p className="card-text">
     
        <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
        </p>
      </div>
    </div>
  </div>

  <div className="design2">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/wedg3.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
        <p className="card-text">
     
        <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
        </p>
      </div>
    </div>
  </div>
  
  

</table> */}
<table style={{marginLeft:"200px",padding:"2rem"}}>
  <tbody>
    <tr>
      <td style={{ paddingRight: "2rem" }}>
        <div className="design1">
          <div className="card" style={{ width: "18rem" }}>
            <img src="img/gift.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
              <p className="card-text">
                <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
              </p>
            </div>
          </div>
        </div>
      </td>
   
      <td style={{ paddingRight: "2rem" }}>        <div className="design2">
          <div className="card" style={{ width: "18rem" }}>
            <img src="img/wedg3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
              <p className="card-text">
                <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
              </p>
            </div>
          </div>
        </div>
      </td>
      <td style={{ paddingRight: "2rem" }}>
      <div className="design3">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/wedgft.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
        <p className="card-text">
     
        <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
        </p>
      </div>
    </div>
  </div>
  </td>

  </tr>
  <tr>
  <td style={{ paddingRight: "2rem" }}>
  <div className="design5">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/wooden.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
        <p className="card-text">
     
        <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
        </p>
      </div>
    </div>
  </div>
  </td>
  <td style={{ paddingRight: "2rem" }}>
  <div className="design4">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/wedgift.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
        <p className="card-text">
     
        <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
        </p>
      </div>
    </div>
  </div>
  
</td>


<td style={{ paddingRight: "2rem" }}>
  <div className="design5">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/scrap.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
        <p className="card-text">
     
        <Button style={{width:"16rem",marginTop:"-11px"}}>Add to Cart</Button>
        </p>
      </div>
    </div>
  </div>
  
</td>
    </tr>
    {/* Repeat the above structure for the remaining cards */}
  </tbody>
</table>



     </div>
    
    </>
  )
}

export default Birthday