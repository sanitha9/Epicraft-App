import React from "react";

const ReplyComment = () => {
  return (
 <>
   <h5 style={{marginLeft:"500px"}}><u>Here artist replied by your comment</u></h5><br></br>
    <div
      style={{
        border: "1px solid black",
        width: "500px",
        height: "500px",
        // This will center the container in the web page
        display: "flex",
        // alignItems: "center",
        // justifyContent: "flex",
        margin:"400px",
        marginTop:"-10px"
      }}
    >
           
      
      <p>This is a paragraph inside the container.</p>
      
    </div>
    </>
  );
};

export default ReplyComment;
