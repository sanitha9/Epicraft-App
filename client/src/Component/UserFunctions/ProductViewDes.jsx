import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ProductViewDes = props => {
  const login_id = localStorage.getItem('login_id');
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate()
  const [description, setDescription] = useState({});
  const [category, setcategory] = useState([]);
  const[inputs, setinputs]=useState({
    login_id:login_id,
    
    productid:id,
});
  console.log(description);
    const handleClick = () => {
    
        // This will navigate to the reply comment page
        window.location.href = "/ReplyComment";
      };

      useEffect(() => {
        
        axios
          .get(`http://localhost:5000/artitems/view-artdescription/${id}`)
          .then((response) => {
           console.log(response);
            setDescription(response.data.data);
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      }, []);

      const setRegister=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setinputs({...inputs,[name]:value});
        console.log(inputs);
      }
      const registersubmit =(event)=>{
        event.preventDefault();
     
        axios.post('http://localhost:5000/comment/comment',inputs).then((response)=>{
          navigate('/userhome')
        })
       
    
      }
      useEffect(() => {
        
        axios
          .get(`http://localhost:5000/comment/view-comments/${id}`)
          .then((response) => {
           console.log(response);
           setcategory(response.data.data);
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      }, []);
  return (

    
    
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center"style={{ width: "500px", height: "500px" }}
                >
                  <a
  data-fslightbox="mygalley"
  className="rounded-4"
  target="_blank"
  data-type="image"
  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
>
  <img
    style={{ width: '100%', height: '100%' }}
    className="rounded-4 fit"
    src={`/upload/${description.image}`}
    alt="Product"
  />
</a>

                
                {/* <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp">
                  <img style={{ Width: '100%', height:'100%'}} className="rounded-4 fit" src={`/upload/${description.image}`} alt="Product" />
                </a> */}
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                {description.artname}
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
                  <span className="h5"> {description.price}</span>
                  <span className="text-muted">/per one</span>
                </div>

                <p>
                {description.description}
                </p>

                <div className="row">
                  <dt className="col-3">Category:</dt>
                  <dd className="col-9"> {description.categoryname}</dd>

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
          {/* <p className="mb-2">Rate the Place</p>
          <div className="mb-4">
            <span className="star-rating">
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
              <a href="#"><i className="icofont-ui-rating icofont-2x"></i></a>
            </span>
          </div> */}
          <form>
            <div className="form-group">
              <label>Your Comments</label>
              <textarea className="form-control" name='comment'  onChange={setRegister}></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-sm" type="button" style={{marginTop:"50px"}} onClick={registersubmit}> Submit Comment </button>
            </div>
            {/* <div className="form-group">
              <button className="btn btn-primary btn-sm" type="button" style={{marginTop:"-50px",marginLeft:"900px"}}
               
             
             
               onClick={handleClick}
               >View Reply</button>
            </div> */}
          </form>
        </div>
      </div>

      <div className="container">
  <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
    <h5 className="mb-4">Review Comments</h5>

    <div className="col-md-8">
      <div className="card panel-table">
      
        <div className="card-body">
          {category.map((category, index) => (
            <div className="card mb-3" key={index}>
              <div className="card-body">
                <h6 className="card-title">Name: {category.name}</h6>
                <p className="card-text">Comment: {category.comment}</p>
                <p className="card-text">Product: {category.artname}</p>
                <p className="card-text">Date: {category.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

ProductViewDes.propTypes = {}

export default ProductViewDes