import React from 'react'
import PropTypes from 'prop-types'

const ProductViewDes = props => {

    const handleClick = () => {
        // This will navigate to the reply comment page
        window.location.href = "/ReplyComment";
      };
  return (
  
    
    
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center"style={{ width: "500px", height: "500px" }}
                >
                
                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
                  <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" alt="Product" />
                </a>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hoodie
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">
                      4.5
                    </span>
                  </div>
                  <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">$75.00</span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                  men.
                </p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: '170px' }}>
                      <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0"> Buy now </a>
                <a href="#" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
              </div>
            </main>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="well well-sm">
              <div className="row">
                <div className="col-xs-6 col-md-6 text-center">
                  <h1 className="rating-num">
                    4.0
                  </h1>
                  <div className="rating">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </div>
                  <div>
                    <span className="glyphicon glyphicon-user"></span>1,050,008 total
                  </div>
                </div>
                <div className="col-xs-6 col-md-6">
                  <div className="row rating-desc">
                    <div className="col-xs-3 col-md-3 text-right">
                      <span className="glyphicon glyphicon-star"></span>5
                    </div>
                    <div className="col-xs-8 col-md-9">
                      <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                          aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                          <span className="sr-only">80%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3 col-md-3 text-right">
                      <span className="glyphicon glyphicon-star"></span>4
                    </div>
                    <div className="col-xs-8 col-md-9">
                      <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                          aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
                          <span className="sr-only">60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3 col-md-3 text-right">
                      <span className="glyphicon glyphicon-star"></span>3
                    </div>
                    <div className="col-xs-8 col-md-9">
                      <div className="progress">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20"
                          aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}>
                          <span className="sr-only">40%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3 col-md-3 text-right">
                      <span className="glyphicon glyphicon-star"></span>2
                    </div>
                    <div className="col-xs-8 col-md-9">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="20"
                          aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}>
                          <span className="sr-only">20%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-3 col-md-3 text-right">
                      <span className="glyphicon glyphicon-star"></span>1
                    </div>
                    <div className="col-xs-8 col-md-9">
                      <div className="progress">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100" style={{ width: '15%' }}>
                          <span className="sr-only">15%</span>
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

      <div className="container">
        <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
          <h5 className="mb-4">Leave Comment</h5>
          <p className="mb-2">Rate the Place</p>
          <div className="mb-4">
            <span className="star-rating">
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
            </span>
          </div>
          <form>
            <div className="form-group">
              <label>Your Comment</label>
              <textarea className="form-control"></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-sm" type="button" style={{marginTop:"50px"}}> Submit Comment </button>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-sm" type="button" style={{marginTop:"-50px",marginLeft:"900px"}}
               
             
             
               onClick={handleClick}
               >View Reply</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

ProductViewDes.propTypes = {}

export default ProductViewDes