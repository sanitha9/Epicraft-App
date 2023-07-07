import React from 'react'
import AdminNav from '../NavBar/AdminNav'
import AdminFooter from '../Footer/AdminFooter'

const AdminFirstPage = () => {
  return (
    <>
    <AdminNav/>
    <section className="pt-8 pt-md-9">
  <div className="container">
    {/* <h2 className="text-dark fw-normal">Get answers</h2> */}
    <form className="mt-4">
      <div className="input-group input-group-lg shadow-sm">
        <span className="input-group-text border-0">
          <i className="fas fa-search fa-xs text-secondary mb-1" />
        </span>
        <input
          type="text"
          className="form-control bg-white border-0 px-1"
          placeholder="Search..."
        />
        <span className="input-group-text border-0 py-1 pe-2">
          <button
            type="submit"
            className="btn btn-primary text-uppercase-bold-sm"
          >
            Search
          </button>
        </span>
      </div>
    </form>
    <div className="row mt-6">
      <div className="col-12 mb-4">
      <span className="input-group-text border-0 py-1 pe-2">
          <button
            type="submit"
            className="btn btn-primary text-uppercase-bold-sm"
          >
          Manage
          </button>
        </span>
      </div>
      <div className="col-md-3 mb-4">
  <a
    href="usermanage"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4 "
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-user-friends"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Users</span>
  </a>
</div>

 <div className="col-md-3 mb-4">
      <a
        href="artistmanage"
        className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
      >
        <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
          <i
            className="fa fa-paint-brush fa-3x"
            aria-hidden="true"
            style={{ color: "black" }}
          ></i>
        </span>
        <span className="text-dark mt-3">Artists</span>
      </a>
    </div>



    <div className="col-md-3 mb-4">
  <a
    href="managegroup"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-users"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Groups</span>
  </a>
</div>


<div className="col-md-3 mb-4">
  <a
    href="addcategory"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-tags"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Categories</span>
  </a>
</div>
      <div className="col-12 mb-4">
      <span className="input-group-text border-0 py-1 pe-2">
          <button
            type="submit"
            className="btn btn-primary text-uppercase-bold-sm"
          >
            Exhibitions
          </button>
        </span>
      </div>
      <div className="col-md-3 mb-4">
  <a
    href="addex"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="far fa-calendar-alt"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Add New Events</span>
  </a>
</div>
      <div className="col-md-3 mb-4">
      <a
    href="upcomingeventmanageadmin"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-bookmark"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Up coming Events</span>
  </a>
      </div>
      <div className="col-12 mb-4">
      <span className="input-group-text border-0 py-1 pe-2">
          <button
            type="submit"
            className="btn btn-primary text-uppercase-bold-sm"
          >
            View
          </button>
        </span>
      </div>
   <div className="col-md-3 mb-4">
      <a
    href="adnot"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-bell"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Notifications</span>
  </a>
      </div>

      <div className="col-md-3 mb-4">
      <a
    href="ordermanage"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-truck"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Orders</span>
  </a>
      </div>






      <div className="col-md-3 mb-4">
      <a
    href="review"
    className="card align-items-center text-decoration-none border-0 hover-lift-light py-4"
  >
    <span className="icon-circle icon-circle-lg bg-pastel-primary text-primary">
      <i
        className="fas fa-comment-alt"
        aria-hidden="true"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      ></i>
    </span>
    <span className="text-dark mt-3">Reviews</span>
  </a>
      </div>

    </div>
  </div>
</section>

    
    
    <AdminFooter/>
    </>
  )
}

export default AdminFirstPage