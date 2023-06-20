import React from 'react'
import PublicUserNavBar from '../Component/NavBar/PublicUserNavBar'
import PublicSlider from '../Component/PublicUser/PublicSlider'
import PublicUserFooter from '../Component/Footer/PublicUserFooter'


const PublicUser = () => {
  return (
    <div>
        <PublicUserNavBar/>
        <PublicSlider/>
        <PublicUserFooter/>

    </div>
  )
}

export default PublicUser