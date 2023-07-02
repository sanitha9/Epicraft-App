import React from 'react';

const ReservePayment = () => {
  return (
    <div className="container"style={{width:"642px"}} >
      <div className="box">
        <div className="Addresscol-50">
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fab fa-cc-visa icon" style={{ fontSize: "40px", color: "navy" }} />
            <i className="fab fa-cc-amex icon" style={{ fontSize: "40px", marginLeft: '20px', color: "blue" }} />
            <i className="fab fa-cc-mastercard icon" style={{ fontSize: "40px", marginLeft: '20px', color: "red" }} />
            <i className="fab fa-cc-discover icon" style={{ fontSize: "40px", marginLeft: '20px', color: "orange" }} />
          </div>
          <label htmlFor="cname">Name on Card</label>
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="John More Doe"
          />
          <label htmlFor="ccnum">Credit card number</label>
          <input
            type="text"
            id="ccnum"
            name="cardnumber"
            placeholder="1111-2222-3333-4444"
          />
          <label htmlFor="expmonth">Exp Month</label>
          <input
            type="text"
            id="expmonth"
            name="expmonth"
            placeholder="September"
          />
          <div className="Addressrow">
            <div className="Addresscol-50">
              <label htmlFor="expyear">Exp Year</label>
              <input
                type="text"
                id="expyear"
                name="expyear"
                placeholder={2018}
              />
            </div>
            <div className="Addresscol-50">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder={352} />
            </div>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="Continue to checkout"
            className="Addressbtn"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservePayment;
