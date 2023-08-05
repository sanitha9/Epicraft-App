import React, { useEffect, useState } from 'react';
import GroupNav from '../NavBar/GroupNav';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ActivatedGroupView = () => {
  const { id } = useParams();

  const [Groupdetils, setGroupdetils] = useState([]);
  const [artistdetils, setartistdetils] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    
    axios
      .get(`http://localhost:5000/group/groupdeatils/${id}`)
      .then((response) => {
        setGroupdetils(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  useEffect(() => {
    const artistLognId = Groupdetils.login_id;
console.log(artistLognId);
    axios
      .get(`http://localhost:5000/artitems/view-artitems/${artistLognId}`)
      .then((response) => {
        setartistdetils(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [Groupdetils]);
 
  const addToCart = (item) => {
    const login_id = localStorage.getItem('login_id');
    const cartData = {
      login_id: login_id,
      product_id: item._id,
      artname: item.artname,
      quantity: 1, // You can set the quantity according to your requirement
      product_image: item.image,
      price: item.price,
    };

    axios
      .post('http://localhost:5000/cart/add-to-cart', cartData)
      .then((response) => {
        console.log('Item added to cart:', response.data);
        // Perform any additional actions after adding to the cart
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };


  // const handleChatIconClick = () => {
  //   // Perform any additional actions if needed
  //   // Navigate to the next page using navigate('/next-page')
  //   navigate(`/chat/${Groupdetils.login_id}`);
  
  // };


  return (
    <>
    


<GroupNav/>

    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: "url(client/public/img/mr1.jpg)" }}
    >
      <div className="container-fluid page-header-inner py-5">
        <div className="container text-center">
          <h6
            className="display-3 text-white mb-3 animated slideInDown"
            style={{ fontSize: 30 }}
          >
            "This is the community of Who loves th Arts"
            <br />
            
          </h6>
          {/* <h3>-Albert Einsten</h3> */}
          {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav> */}
       <Link to={`/chat/${Groupdetils.login_id}`}>
        <i
          className="fas fa-comment-alt text-white fa-3x ml-3"
          style={{ cursor: 'pointer' }}
        ></i>
      </Link>
       {/* <i
        className="fas fa-comment-alt text-white fa-3x ml-3"
        style={{ cursor: 'pointer' }}
        onClick={handleChatIconClick}
      ></i> */}
        </div>
      </div>
    </div>

    <h1 style={{ textAlign: 'center' }}>Explore the Art works</h1>
    <div className="container">
  <div className="row">
    {artistdetils.map((art) => (
      <div className="col-md-4 mb-4" key={art.id}>
        <div className="card">
          <img src={`/upload/${art.image}`} className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <h5 className="card-title">name: {art.artname}</h5>
            <h5 className="card-title">RS: {art.price}</h5>
            <p className="card-text">{art.description}</p>
           
          </div>
          <Link
              to={`/cart/${art._id}`}
              className="btn btn-primary btn-block btn-sm"
              style={{ width: '100px', marginLeft: '100px' }}
              onClick={() => addToCart(art)}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </Link>

        </div>
      </div>
    ))}
  </div>
</div>

   
    
   
    </>
  );
};

export default ActivatedGroupView;
