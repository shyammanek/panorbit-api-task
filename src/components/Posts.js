import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import './style.css';
import Logo from './Images/user.png'

export const Posts = () => {
    return (
        <div>
            <div className="Main__div">
                <div className="Sidebar">
                    <div className="Sidebar__list">
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li className="Sidebar_active"><a href="#">Posts</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">ToDo</a></li>
                        </ul>
                    </div>
                </div>

                <div className="Content">
                    <div className="Content__header">
                        <span>Profile</span>
                        <div className="User">
                            <img src={Logo} className="User__img" />
                            <span className="User__name">Leanne Graham</span>
                        </div>
                    </div>
                </div>


                   
            </div>
         </div>

    )
}
