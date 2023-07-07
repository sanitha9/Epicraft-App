import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { alignPropType } from 'react-bootstrap/esm/types';
const Birthday = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState([]);
  const[inputs, setinputs]=useState([]);
  console.log("value==>",inputs);
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:5000/customize/request',inputs).then((response)=>{
      navigate('/artHome')
    })
   

  }
  useEffect(() => {
    axios.get('http://localhost:5000/customize/view-customized')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
    return (
      <>
<div
    className="container-fluid page-header mb-5 p-0"
    style={{ backgroundImage: `url('img/birthday.jpg')` }}

  >
    <div className="container-fluid page-header-inner py-5">
      <div className="container text-center">
        <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontSize:"30px"}}>
        Make your wishes more Memorable with us!!
        </h1>
       
      </div>
    </div>

  </div>
    
  <div className='contn' style={{textAlign:"center",fontSize:"20px"}}>

<p>Please share the informations of your big day so we can help you along your wishes more special!!</p>
<hr></hr>
<div className="container" style={{ display: 'block', width: 700, height: 1150, marginLeft: "380px", border: '1px solid black' }}>
  <Form>
    <Form.Group>
      <Form.Label>Wishes send to:</Form.Label>
      <Form.Control type="text" placeholder="B'day boy/girl" name="sender" onChange={setRegister} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Wishes send by:</Form.Label>
      <Form.Control type="text" placeholder="Your Name" name="receiver" onChange={setRegister} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Subject</Form.Label>
      <Form.Control type="text" placeholder="B'day boy/girl" name="subject" onChange={setRegister} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Enter your email address:</Form.Label>
      <Form.Control type="email" placeholder="Enter your email address"name="email" onChange={setRegister} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Enter special Date</Form.Label>
      <Form.Control type="date" placeholder="Enter wedding date" name="date" onChange={setRegister} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Phone</Form.Label>
      <Form.Control type="text" placeholder="Contact No" name="phone" onChange={setRegister}  />
    </Form.Group>
    <Form.Group>
  <Form.Label>Choose Artist:</Form.Label>
  <Form.Select name="artist" onChange={setRegister} >
    <option value="">Select an artist</option>
    <option value="artist1">Artist 1</option>
    <option value="artist2">Artist 2</option>
    <option value="artist3">Artist 3</option>
    {/* Add more options as needed */}
  </Form.Select>
</Form.Group>

    <Form.Group>
      <Form.Label>Comments your idea here:</Form.Label>
      <Form.Control as="textarea" placeholder="Enter your ideas here.."name="idea" onChange={setRegister}  />
    </Form.Group>
    <Form.Group>
      <Form.Label>Upload your design/photo here:</Form.Label>
      <Form.Control type="file" placeholder="Enter your ideas here.."name="sender" onChange={setRegister}  />
    </Form.Group>
   
  <Button variant="primary" type="submit" href="reservepay">
    Submit
  </Button>

  </Form>
</div>
</div>
  
      <br />
   

  
  
   <div className='bottom'>
    <hr></hr><p style={{textAlign:"center",fontSize:"1rem"}}>
    -A preview of your design will be emailed to you within 1 working day.<br/>
           -You can either confirm the design or ask for changes on it.<br/>
      -Once design is confirmed, it will be shipped out & delivered within 2-4 working days.<br/></p>
      <hr></hr>
    <p style={{textAlign:"center",fontSize:"2rem"}}>Top customized Gifts..</p>
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
              <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
            </div>
          </div>
        </div>
      </td>
   
      <td style={{ paddingRight: "2rem" }}>        <div className="design2">
          <div className="card" style={{ width: "18rem" }}>
            <img src="img/wedg3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Inside your Hug Mug<br/> Rs.100</h5>
              <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
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
      <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
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
      <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
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
      <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
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
      <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
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