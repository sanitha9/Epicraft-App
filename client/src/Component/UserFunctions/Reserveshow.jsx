import React from 'react'

const Reserveshow = () => {
  return (
    <>
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
  <title>Booking Form HTML Template</title>
  {/* Google font */}
  <link
    href="https://fonts.googleapis.com/css?family=Cabin:400,700"
    rel="stylesheet"
  />
  {/* Bootstrap */}
  <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
  {/* Custom stlylesheet */}
  <link type="text/css" rel="stylesheet" href="css/style.css" />
  {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
  {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
  {/*[if lt IE 9]>
		  
		  
		<![endif]*/}
  <div id="reservebooking" className="reservesection">
    <div className="reservesection-center">
      <div className="container" style={{width:"642px",marginTop:"100px"}}>
        <div className="row">
          <div className="reservebooking-form">
            <div className="reservebooking-bg" />
            <form>
              <div className="reserveform-header">
                <h2>Make your reservation</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Check In</span>
                    <input className="reserveform-control" type="date" required="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Check Out</span>
                    <input className="reserveform-control" type="date" required="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Adults</span>
                    <select className="reserveform-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <span className="reserveselect-arrow" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="reserveform-group">
                    <span className="reserveform-label">Children</span>
                    <select className="reserveform-control">
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <span className="reserveselect-arrow" />
                  </div>
                </div>
              </div>
              <div className="reserveform-group">
                <span className="reserveform-label">Email</span>
                <input
                  className="reserveform-control"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="reserveform-group">
                <span className="reserveform-label">Phone</span>
                <input
                  className="reserveform-control"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="reserveform-group">
                <span className="reserveform-label">Amount</span>
                <input
                  className="reserveform-control"
                  type="tel"
                  
                />
              </div>
              <div className="reserveform-btn">
              <a href='reservepay'className="reservesubmit-btn">
                     Reserve
             </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* This templates was made by Colorlib (https://colorlib.com) */}
</>

    
    </>
  )
}

export default Reserveshow