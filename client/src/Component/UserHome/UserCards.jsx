import React from 'react'
import { Button } from 'react-bootstrap'


const UserCards = () => {
  return (
    <>
    
    <div className="Works">
  <div className="card1">
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="img/can1.jpg"
        className="card-img-top"
        width="200px"
        height="auto"
      />
      <div className="card-body">
        <h5 className="card-title">Krishna&Radha</h5>
        <p className="card-text">
        <label>Rs.100</label>
        
        <Button style={{width:"6rem",marginTop:"-20px"}}>Buy</Button>
        
          
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </p>
      </div>
    </div>
  </div>
  <div className="card2">
    <div className="card" style={{ width: "18rem",marginTop:"-20px"}}>
      <img
        src="img/can5.jpg"
        className="card-img-top"
        alt="..."
        width="200px"
        height="auto"
      />
      <div className="card-body">
        <h5 className="card-title">BlueCat</h5>
        <p className="card-text">
        <label>Rs.100</label>
        <Button style={{width:"6rem",marginTop:"-20px"}}>Buy</Button>
        </p>
      </div>
    </div>
  </div>
  <div className="card3">
    <div className="card" style={{ width: "18rem",marginTop:"-30px" }}>
      <img
        src="img/can4.jpg"
        className="card-img-top"
        alt="..."
        width="200px"
        height="auto"
      />
      <div className="card-body">
        <h5 className="card-title">Lady with viloin</h5>
        <p className="card-text">
        <label>Rs.100</label>
        <Button style={{width:"6rem"}}>Buy</Button>
        </p>
      </div>
    </div>
  </div>
  <div className="card4">
    <div className="card" style={{ width: "18rem",marginTop:"-20px" }}>
      <img
        src="img/r1.jpg"
        className="card-img-top"
        alt="..."
        width="200px"
        height="auto"
      />
      <div className="card-body">
        <h5 className="card-title">Singing Womens</h5>
        <p className="card-text">
        <label>Rs.100</label>
        <Button style={{width:"6rem",marginTop:"-20px"}}>Buy</Button>
        </p>
      </div>
    </div>
  </div>
  <div className="card5">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/r2.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Bride With friends</h5>
        <p className="card-text">
        <label>Rs.100</label>
        <Button style={{width:"6rem",marginTop:"-20px"}}>Buy</Button>
        </p>
      </div>
    </div>
  </div>
  <div className="card6">
    <div className="card" style={{ width: "18rem" }}>
      <img src="img/r3.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Lady with smile</h5>
        <p className="card-text">
        <label>Rs.100</label>
          <Button style={{width:"6rem",marginTop:"-20px"}}>Buy</Button>
        </p>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default UserCards