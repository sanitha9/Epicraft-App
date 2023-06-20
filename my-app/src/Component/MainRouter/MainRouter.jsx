import React from 'react'
import { Route, Routes } from 'react-router-dom'
 import PublicUserAbout from '../../Pages/PublicUserAbout'

import PublicUser from '../../Pages/PublicUser'
import Login from '../Login/Login'
import ArtistReg from '../Register/ArtistReg'

import UserReg from '../Register/UserReg'
import ArtistHome from '../../Pages/ArtistHome'

import UserHomePage from '../../Pages/UserHomePage'
import Admin from '../Admin/Admin'
import AdminHome from '../../Pages/AdminHome'
import UpcomingEventsPage from '../../Pages/User/UpcomingEventsPage'
import CustomizeReq from '../UserFunctions/CustomizeReq'
import CustomizedReqPage from '../../Pages/User/CustomizedReqPage'
import Wedding from '../../Pages/User/Wedding'
import Birthday from '../UserFunctions/Birthday'
import Mothersday from '../UserFunctions/Mothersday'
import Othercus from '../UserFunctions/Othercus'
import Notification from '../UserFunctions/Notification'
import JoinGroup from '../UserFunctions/JoinGroup'
import Group from '../ArtistFunctions/Group'

import Addex from '../Admin/Addex'
import Manageuser from '../Admin/Manageuser'
import Manageartist from '../Admin/Manageartist'
import Orders from '../Admin/Orders'
import Managegroup from '../Admin/Managegroup'
import Review from '../Admin/Review'
import AdminExhibition from '../../Pages/Admin/AdminExhibition'
import UserDetails from '../../Pages/Admin/UserDetails'
import ArtistManage from '../../Pages/Admin/ArtistManage'
import GroupManage from '../../Pages/Admin/GroupManage'
import OrdersMan from '../../Pages/Admin/OrdersMan'
import AdminNoti from '../../Pages/Admin/AdminNoti'
import ReviewMang from '../../Pages/Admin/ReviewMang'
import GroupCration from '../../Pages/Artist/GroupCration'
import NotificationPage from '../../Pages/User/NotificationPage'
import CustomizedRequestView from '../ArtistFunctions/CustomizedRequestView'
import CreateAnEvent from '../ArtistFunctions/CreateAnEvent'
import CreateEventPage from '../../Pages/Artist/CreateEventPage'
import Product from '../UserFunctions/Product'
import ArtistNotificationPage from '../../Pages/Artist/ArtistNotificationPage'
import UpcomingEventsArtist from '../ArtistFunctions/UpcomingEventsArtist'
import UpcomingEvent from '../../Pages/Artist/UpcomingEvent'
import Cart from '../UserFunctions/Cart'
import Payment from '../UserFunctions/Payment'
import AddressPaymentCheckoutForm from '../UserFunctions/Addresspayment'
import Upload from '../ArtistFunctions/Upload'








const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<PublicUser/>} />
            <Route path="publicuserabout" element={<PublicUserAbout/>} />
            <Route path="login" element={<Login/>} />
            <Route path="artistReg" element={<ArtistReg/>} />
            <Route path="userReg" element={<UserReg/>}/>
            <Route path="artHome" element={<ArtistHome/>}/>
            <Route path="userhome" element={<UserHomePage/>}/>
            <Route path="admin" element={<AdminHome/>}/>
            <Route path="upcomingevents" element={<UpcomingEventsPage/>}/>
            <Route path="customize" element={<CustomizedReqPage/>}/>
            <Route path="wedding" element={<Wedding/>}/>
            <Route path="birthday" element={<Birthday/>}/>
            <Route path="mothersday" element={<Mothersday/>}/>
            <Route path="othersday" element={<Othercus/>}/>
            <Route path="not" element={<NotificationPage/>}/>
            <Route path="join" element={<JoinGroup/>}/>
            <Route path="group" element={<Group/>}/>
            
            <Route path="addex" element={<AdminExhibition/>}/>
            <Route path="usermanage" element={<UserDetails/>}/>
            <Route path="artistmanage" element={<ArtistManage/>}/>
            <Route path="orders" element={<OrdersMan/>}/>
            <Route path="managegroup" element={<GroupManage/>}/>
            <Route path="review" element={<ReviewMang/>}/>
            <Route path="adnot" element={<AdminNoti/>}/>
            <Route path="groupcration" element={<GroupCration/>}/>
            <Route path="artCustomizeRequestView" element={<CustomizedRequestView/>}/>
            <Route path="createevent" element={<CreateEventPage/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="artistnotif" element={<ArtistNotificationPage/>}/>
            <Route path="artUpcoming" element={<UpcomingEvent/>}/>
           
            <Route path="cart" element={<Cart/>}/>
            <Route path="payment" element={<Payment/>}/>
            <Route path="addaddress" element={<AddressPaymentCheckoutForm/>}/>
            <Route path="upload" element={<Upload/>}/>
        </Routes>
    </div>
  )
}

export default MainRouter