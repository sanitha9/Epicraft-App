import React from 'react';

const Upload = () => {
  return (
    <div>
      <div className="container text-center">

        
        <form method="POST" action="upload.php" encType="multipart/form-data">
        <center><h2>Upload Your Work here</h2></center>
          <div className="form-group">
     
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
          </div>
          <div className="form-group">
        
            <textarea className="form-control" id="description" name="description" rows="3" placeholder="Desccription"></textarea>
          </div>
          <div className="form-group">
         
            <input type="number" className="form-control" id="price" name="price" placeholder="Enter price" />
          </div>
          <div className="form-group">
      
            <select className="form-select" id="category" name="category">
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <div className="form-group">
       
            <input type="file" className="form-control-file" id="image" name="image" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
