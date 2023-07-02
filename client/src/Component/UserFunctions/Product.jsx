import React,{useState} from 'react'

const Product = () => {
  const [searchValue, setSearchValue] = React.useState('');

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to filter products based on search input
  const filterProducts = (product) => {
    // Convert search input and product name to lowercase for case-insensitive search
    const search = searchValue.toLowerCase();
    const productName = product.name.toLowerCase();

    // Check if product name includes the search input
    return productName.includes(search);
  };

  return (
    <>
    
    <>
  {/*For Page*/}
  
  <div className="page">
  {/* For Row containing all card */}
  <div className="container">
    <div className="row">
      <div className="col-md-2">
        <select class="form-select" aria-label="Default select example">
          <option selected>Search By</option>
          <option value="1">Category</option>
          <option value="2">Artist</option>
          <option value="3">Products</option>
        </select>
      </div>
      <div className="col-md-2">
        <select class="form-select" aria-label="Default select example">
          <option selected>Price Range</option>
          <option value="1">1k</option>
          <option value="2">1k-2k</option>
          <option value="3">2k-3k</option>
        </select>
      </div><div className="col-md-8">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      
    </div>


    <div className="row">
      {/*Card 1*/}
      <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
     <a href="cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
     <a href="addaddress">Buy Now</a>
    </button>
  </div>
</div>

</div>


            
         
      </div>
      <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>
</div>
      <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>


            
         </div>
         <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>

</div>
</div>
<div className="row">
      {/*Card 1*/}
      <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>


            
         
      </div>
      <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>
</div>
      <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
      Add to Cart
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>


            
         </div>
         <div className="col-md-3">
        <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
          {/*Card image*/}
          <div className="view view-cascade overlay text-center">
            <img
              className=""
              src="img/can2.jpg"
              alt=""
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card Body*/}
          <div className="card-body card-body-cascade text-center">
            {/*Card Title*/}
            <h4 className="card-title">
              <strong>
                <a href="">Krishna&Radha</a>
              </strong>
            </h4>
            {/* Card Description*/}
            <p className="card-text">
              An authentic picture showing the love of Krishna and Radha
            </p>
            <p className="price">$50</p>
      
            {/*Card footer*/} </div>
        
            <div className="row">
  <div className="col-6" style={{marginLeft:'-10px'}}>
    <button type="button" className="btn btn-primary btn-block btn-sm" style={{width:'100px'}}>
      Add to Cart
    </button>
  </div>
  <div className="col-6" style={{padding:'20',marginLeft:'10px'}}>
    <button type="button" className="btn btn-success btn-block btn-sm" style={{width:'100px',marginRight:'-20px'}}>
      Buy Now
    </button>
  </div>
</div>

</div>

</div>
</div>
</div></div>
    
</>

    </>
  )
}

export default Product