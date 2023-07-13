import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Product = () => {
  const [searchValue, setSearchValue] = useState('');
  const [artitem, setArtItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Set the number of items to display per page

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to filter products based on search input
  const filterProducts = (product) => {
    // Convert search input and product name to lowercase for case-insensitive search
    const search = searchValue.toLowerCase();
    const productName = product.artname.toLowerCase();

    // Check if product name includes the search input
    return productName.includes(search);
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

  // Calculate the index range for items to display based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = artitem.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages based on the number of items and items per page
  const totalPages = Math.ceil(artitem.length / itemsPerPage);

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Search By</option>
                <option value="1">Category</option>
                <option value="2">Artist</option>
                <option value="3">Products</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Price Range</option>
                <option value="1">1k</option>
                <option value="2">1k-2k</option>
                <option value="3">2k-3k</option>
              </select>
            </div>
            <div className="col-md-8">
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
            {currentItems.map((user) => (
              <div className="col-md-3" key={user._id}>
                <div className="card card-cascade card-ecommerce wider shadow mb-5">
                  <div className="view view-cascade overlay text-center">
                  {/* <a href="ProductViewDes">
                    <img className="" src={`/upload/${user.image[0]}`} alt="" />
                  </a> */}

                    <img className="" src={`/upload/${user.image}`} alt="" />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title">
                      <strong>
                        <a href="ProductViewDes">{user.artname}</a>
                      </strong>
                    </h4>
                    <p className="card-text">{user.description}</p>
                    <p className="price">{user.price}</p>
                  </div>
                  <div className="row">
                    <div className="col-6" style={{ marginLeft: '-10px' }}>
                      <button type="button" className="btn btn-primary btn-block btn-sm" style={{ width: '100px' }}>
                        <a href="cart">
                          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </button>
                    </div>
                    <div className="col-6" style={{ padding: '20px', marginLeft: '10px' }}>
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-sm"
                        style={{ width: '100px', marginRight: '-20px' }}
                      >
                        <a href="addaddress">Buy Now</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav>
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Product;
