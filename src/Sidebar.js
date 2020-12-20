import { Avatar } from "@material-ui/core";
import React from 'react';
import "./Sidebar.css";



function Sidebar() {

   
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://miro.medium.com/max/900/1*EntHChgUyirgbZ9A3zTxkA.png" alt=""/>
                <Avatar className="sidebar__avatar" src="https://i.ibb.co/hBpM4rQ/shivam-avatar.jpg" />
                <h2>Shivam Vora</h2>
                <h4>shivampatel27102001@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className="sidebar__statNumber">4,271</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p className='recent'>Recent</p>    
                
                    <p className='sidebar__recentItem'># React js</p>
                    <p className='sidebar__recentItem'># Redux</p>
                    <p className='sidebar__recentItem'># Firebase</p>
                    <p className='sidebar__recentItem'># Shivam vora</p>
                    <p className='sidebar__recentItem'># Web Development</p>
                
                
                
                          
            </div>
            
        </div>
    );
}

export default Sidebar;