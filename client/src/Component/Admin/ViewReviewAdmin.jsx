import React from 'react'

const ViewReviewAdmin = () => {
  return (
    <>
    
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="jobcategory">
        <div className="card panel-table">
          <div className="card-header" style={{ textAlign: 'center' }}>
            <h2>Reviews</h2>
            <div className="row" />
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered table-list">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Reviewed Item</th>
                  <th>Review Issued Date</th>
                  <th>Review Comments</th>
                  <th>Reply By Artist</th>
                  <th>Reply Date</th>
                </tr>
              </thead>
              <tbody>
                {/* Remove the category mapping */}
                <tr>
                  <td>1</td>
                  <td>Category 1</td>
                   <td>Category 1</td>
                  <td>Category 1</td>
                  <td>Category 1</td>
                  <td>Category 1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Category 2</td>
                  <td>Category 1</td>
                  <td>Category 1</td>
                  <td>Category 1</td>
                  <td>Category 1</td>
                </tr>
                {/* Add more table rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default ViewReviewAdmin