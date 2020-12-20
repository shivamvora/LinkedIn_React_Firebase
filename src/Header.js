import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOpetion from './HeaderOpetion';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"  alt="you will get  soon" />

            <div className='header__search'>
                <SearchIcon />
                <input type="text"/>    
            </div>
            
            </div>

            <div className='header__right'>
                 <HeaderOpetion Icon={HomeIcon} title="home"/>
                 <HeaderOpetion Icon={SupervisorAccountIcon} title='My Network'/>
                 <HeaderOpetion Icon={BusinessCenterIcon} title='Jobs'/>
                 <HeaderOpetion Icon={MessageIcon} title='Messaging'/>
                 <HeaderOpetion Icon={NotificationsIcon} title='Notifications'/>
                 <HeaderOpetion avatar="https://i.ibb.co/hBpM4rQ/shivam-avatar.jpg" title="me"/>
                 
            </div>
        </div>
    )
}

export default Header;
