import React from 'react'
import UserNav from '../Component/NavBar/UserNav'
import UserHeader from '../Component/UserHome/UserHeader'
import UserBody from '../Component/UserHome/UserBody'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'
import Product from '../Component/UserFunctions/Product'

const UserHomePage = () => {
  return (
   <>
   <UserNav/>
   {/* <UserHeader/> */}
   {/* <UserBody/>
   <UserCards/> */}
   <Product/>
   <PublicUserFooter/>
   </>
  )
}

export default UserHomePage