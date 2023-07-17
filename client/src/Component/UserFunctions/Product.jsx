import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [searchValue, setSearchValue] = useState('');
  const [artItems, setArtItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Set the number of items to display per page

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/artitems/view-artitems')
      .then((response) => {
        setArtItems(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const addToCart = (item) => {
    const login_id = localStorage.getItem('login_id');
    const cartData = {
      login_id: login_id,
      product_id: item._id,
      artname:item.artname,
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = artItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(artItems.length / itemsPerPage);

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="row">
            {/* Search and filter components */}
          </div>

          <div className="row">
            {artItems.map((item) => (
              <div className="col-md-3" key={item._id}>
                <div className="card card-cascade card-ecommerce wider shadow mb-5">
                  <div className="view view-cascade overlay text-center">
                    <img className="" src={`/upload/${item.image}`} alt="" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title">
                
                    <strong>
                <Link to={`/ProductViewDes/${item._id}`}>{item.artname}</Link>
                   </strong>


                    </h4>
                    <p className="card-text">{item.description}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <div className="row">
                    <div className="col-6" style={{ marginLeft: '-10px' }}>
                      <Link
                        to={`/cart/${item._id}`}
                        className="btn btn-primary btn-block btn-sm"
                        style={{ width: '100px' }}
                        onClick={() => addToCart(item)}
                      
                      >
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="col-6" style={{ padding: '20px', marginLeft: '10px' }}>
                      <Link
                        type="button"
                        className="btn btn-success btn-block btn-sm"
                        style={{ width: '100px', marginRight: '-20px' }}
                      >
                        <Link
                        to={'/addaddress'}
                        >Buy Now</Link>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav>
            <ul className="pagination justify-content-center">
              {/* Pagination components */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Product;
