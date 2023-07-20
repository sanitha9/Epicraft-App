import React from 'react';
import GroupNav from '../NavBar/GroupNav';


const ActivatedGroupView = () => {
  return (
    <>
    


<GroupNav/>

    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: "url(img/mr1.jpg)" }}
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
        </div>
      </div>
    </div>

    <h1 style={{ textAlign: 'center' }}>Explore the Art works</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/2.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">tjsryjyr</h5>
              <h5 className="card-title">tjuyruy</h5>
              <p className="card-text">dtuturtu</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/2.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">tjsryjyr</h5>
              <h5 className="card-title">tjuyruy</h5>
              <p className="card-text">dtuturtu</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="img/2.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">tjsryjyr</h5>
              <h5 className="card-title">tjuyruy</h5>
              <p className="card-text">dtuturtu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ActivatedGroupView;
