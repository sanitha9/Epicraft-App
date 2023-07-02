import React from 'react'

const Managegroup = () => {
  return (
 <>
 
 <div className="container">
  <div className="row col-md-12 col-md-offset-2 custyle">
<h3>
     GROUP DETAILS
      </h3>

    <table className="table table-striped custab">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>User_Id</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>News</td>
          <td>News Cate</td>
          <td className="text-center">
          
            <a href="#" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" /> Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Products</td>
          <td>Main Products</td>
          <td className="text-center">
          
            <a href="#" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" /> Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Blogs</td>
          <td>Parent Blogs</td>
          <td className="text-center">
            
            <a href="#" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" /> Delete
            </a>
          </td>
          
        </tr>
      </tbody>
     

    </table>
  </div>
</div>

 
 
 </>

  )
}

export default Managegroup