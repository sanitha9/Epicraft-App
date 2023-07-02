import React from 'react'
import UserNav from '../../Component/NavBar/UserNav'
import Birthday from '../../Component/UserFunctions/Birthday'
import PublicUserFooter from '../../Component/Footer/PublicUserFooter'
 import CustomizeReq from '../../Component/UserFunctions/CustomizeReq'

const CustomizedReqPage = () => {
  return (
    <>
    <UserNav/>
    <Birthday/>

    <PublicUserFooter/>
    </>
  )
}

export default CustomizedReqPage