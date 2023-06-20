import React from 'react'

const Manageuser = () => {
  return (

    <>
    <div className="container">
  <div className="row col-md-12 col-md-offset-2 custyle">
<h3>
     User Details
      </h3>

    <table className="table table-striped custab">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Password</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>User1</td>
          <td>Pwd1</td>
          <td className="text-center">
          
            <a href="#" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" /> Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>User2</td>
          <td>Password2</td>
          <td className="text-center">
          
            <a href="#" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" /> Delete
            </a>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>User3</td>
          <td>Pwd3</td>
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

export default Manageuser