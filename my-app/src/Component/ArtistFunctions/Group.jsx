import React from 'react'
import { Button,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem} from 'react-bootstrap'

const Group = () => {
  return (
    <>
    <div className='group'>

   
    <h4>Suggested for you</h4>
    <label>Groups you might be intrested in ....</label>
    <div className="gcard1">
  <div className="card" style={{ maxWidth: "20rem" ,marginLeft:"300px"}}>
    <img src="img/mr1.jpg" className="card-img-top rounded-circle" alt="..." width={"10rem"} />
    <div className="card-body">
      <label className="card-title" style={{fontSize:"16px"}}>ArtCommunity</label>
      <p className="card-text">
        <Button style={{ width: "6rem", marginTop: "-11px" }}>join</Button>
      </p>
    </div>
  </div>
</div>

    <hr></hr>



    <form className='inner' style={{width:'30%'}}>
      <h3>Create Group</h3>
      <label htmlFor="groupname">GroupName</label>
      <input type="text" placeholder="Email or Phone" id="username2"/>
       {/* <label htmlFor="password">Date</label>  */}
      {/* <input type="date" placeholder="Password" id="password2" /> */}
      <label htmlFor="password">Upload a cover photo</label>
      <input type="file" placeholder="Password" id="password2" />
      <div>
      <label htmlFor="options">Select an option:</label>
      <select id="options" name="options">
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
     
    </div>
    
  

      {/* <label htmlFor="privacy">Privacy</label>
 
    <label>
      <input type="radio" name="privacy" value="public" />
      Public
    </label>
    <label>
      <input type="radio" name="privacy" value="private" />
      Private
    </label> */}
    <label>More options</label>

  {/* <BsFillPeopleFill className="icon" /> */}
 
     
      <label htmlFor="password">Description</label>
      <input type="text" placeholder="Password" id="password2" />
      <button>create</button>
     
  
    </form>
  

    </div>
 
    </>
  )
}

export default Group