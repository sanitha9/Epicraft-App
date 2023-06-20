import React from 'react'
import { useState } from 'react';


import { Button,Offcanvas } from 'react-bootstrap';
const UserBody = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>

<>
<>
{/* <div className='row'>
<div class="Btns">
    <button type="button" class="btn btn-success"style={{marginRight:"-10rem"}}>Murals</button>
    <button type="button" class="btn btn-success"style={{ marginRight: "-25rem" }}>Canvases</button>
    <button type="button" class="btn btn-success"style={{ marginRight: "-40rem" }}>Modern</button>
    <button type="button" class="btn btn-success"style={{marginRight:"-55rem"}}>OtherWorks</button>
</div> */}
{/* </div> */}
<div className='Category' style={{marginRight:'63rem',marginTop:"-5rem"}}>
<Button variant="Success"onClick={handleShow}  style={{ width: '13rem'}}>
      Categories
      </Button><br/><br/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><u>Search By category</u></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div class="Btns">
<button type="button" class="btn btn-success">Paintings</button>
    <button type="button" class="btn btn-success">Sculptures</button>
    <button type="button" class="btn btn-success">Anticraft</button>
    <button type="button" class="btn btn-success">MetalWorks</button>
    <button type="button" class="btn btn-success">WoodWorkings</button>
    <button type="button" class="btn btn-success">BottleWorks</button>
    <button type="button" class="btn btn-success">OtherWorks</button>
</div>

<div >
<Offcanvas.Title><u>Browse by artist</u></Offcanvas.Title>
    {/* <h2><u>browse by artist</u></h2><br/> */}
    <select id="artists" fdprocessedid="nt4zz8">
      <option value={0}>View all</option>
      <option value={24}>Ana Kuni</option>
      <option value={172}>Bushy Wopp</option>
      <option value={19}>Charl Christo</option>
      <option value={23}>Cheeky Observer</option>
      <option value={14}>Claude Chandler</option>
      <option value={8}>Clement Mougel</option>
      <option value={31}>Dfeat</option>
      <option value={16}>Julia Mary Grey</option>
      <option value={39}>K135</option>
    </select>
  </div>
        </Offcanvas.Body>
      </Offcanvas>



</div>

  
</>

</>

   </>
   
  )
}

export default UserBody