import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from '../NavBar/UserNav';

const JoinGroup = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/group/view-groups')
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <>
      <UserNav />
      <div className="artbody">
        <div className="container py-5">
          <div className="row text-center text-white mb-5">
            <div className="col-lg-7 mx-auto">
              <h1 className="display-4">Art Communities</h1>
            </div>
          </div>
          <div className="row">
            {category.map((user) => (
              <div className="col-lg-9" key={user._id}>
                <ul className="list-group shadow">
                  <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                      <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">{user.groupname}</h5>
                        <p className="font-italic text-muted mb-0 small">
                          {user.description}
                        </p>
                        <div className="d-flex align-items-center justify-content-between mt-1">
                          <img
                            src={`/upload/${user.coverphoto}`}
                            alt="Generic placeholder image"
                            width={100}
                            className="artimg ml-lg-5 order-1 order-lg-2"
                          />
                          <button className="btn btn-danger btn-lg" style={{ width: 100 }}>
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGroup;