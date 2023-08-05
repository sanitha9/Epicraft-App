import React, { useEffect, useState } from 'react';
import UserNav from '../NavBar/UserNav';
import axios from 'axios';

const Search = () => {
  const [artItems, setArtItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/register/view-artist')
      .then((response) => {
        setArtItems(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  const filteredArtItems = artItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <UserNav/>
    <div className="container">
  <div className="page-title">
    <div className="row gutters">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
      <h3 className=" text-center">Messaging</h3>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
    </div>
  </div>
  <div className="content-wrapper">
    <div className="row gutters">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card m-0">
          <div className="row no-gutters">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
              <div className="users-container">
              <div className="chat-search-box">
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <div className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ marginTop: '12px', height: '50%' }}
                    >
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
                <h4 className='text-center'>Artists</h4>
                <ul className="users">
                {filteredArtItems.length > 0 ? (
                  filteredArtItems.map((item) => (
                    <li
                      className={`person ${
                        selectedArtist && selectedArtist._id === item._id ? 'active' : ''
                      }`}
                      data-chat="person1"
                      key={item._id}
                      onClick={() => handleArtistClick(item)}
                    >
                      <div className="user">
                        <img
                          src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                          alt="Retail Admin"
                        />
                        <span className="status busy" />
                      </div>
                      <p className="name-time">
                        <span className="name">{item.name}</span>
                        <span className="time">15/02/2019</span>
                      </p>
                    </li>
                  ))
                ) : (
                  <li>No artists found</li>
                )}
              </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
              <div className="selected-user">
                <span>
                  To: <span className="name">Emily Russell</span>
                </span>
              </div>
              <div className="chat-container">
                <ul className="chat-box chatContainerScroll">
                  <li className="chat-right">
                    <div className="chat-hour">
                      08:59 <span className="fa fa-check-circle" />
                    </div>
                    <div className="chat-text">
                      Well I am not sure.
                      <br />I have results to show you.
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Joyse</div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Russell</div>
                    </div>
                    <div className="chat-text">
                      The rest of the team is not here yet.
                      <br />
                      Maybe in an hour or so?
                    </div>
                    <div className="chat-hour">
                      08:57 <span className="fa fa-check-circle" />
                    </div>
                  </li>
                </ul>
                <div className="form-group mt-3 mb-0">
  <textarea
    className="form-control"
    rows={3}
    placeholder="Type your message here..."
    defaultValue={""}
  />
  <input type="submit" value="Send" className="sendbtn btn-primary send-button" />
</div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Search