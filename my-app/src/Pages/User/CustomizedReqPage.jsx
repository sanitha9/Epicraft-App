import React from 'react'
import UserNav from '../../Component/NavBar/UserNav'
import PublicUserFooter from '../../Component/Footer/PublicUserFooter'
 import CustomizeReq from '../../Component/UserFunctions/CustomizeReq'

const CustomizedReqPage = () => {
  return (
    <>
    <UserNav/>
    <CustomizeReq/>

    <PublicUserFooter/>
    </>
  )
}

export default CustomizedReqPage