import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import './style.css';
import Logo from './Images/user.png'
import { useEffect } from 'react';
import axios from 'axios';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';


export const Chat = () => {
    const [data, setData] = useState([]);
    const getUser = async () => {
        const res = await axios.get(`https://panorbit.in/api/users.json`);
        setData(res.data.users);
    }
    useEffect(() => {
        getUser();
    }, []);

    const [isShow, setIsShow] = React.useState(false);
    const [showChat, setIsShowChat] = React.useState(false);

    const toggleShow = () => {
        setIsShow((prev) => !prev)
    }

    const toggleChat = () => {
        setIsShowChat((prev) => !prev)
    }

    return (
        <div>
            <div className="Chat_box" onClick={toggleChat}>
                <div className="d-inline-flex justify-content-between">
                    <span>Chats</span>
                    <span>-</span>
                </div>

                {showChat && <div className="Chat_content">

                    {
                        data.map((curElem, ind) => {
                            return (

                                <ListGroup key={ind} >
                                    <ListGroupItem>
                                        <img src={Logo} alt="User" className="Img" />
                                   
                                        {curElem.name}
                                    </ListGroupItem>

                                </ListGroup>

                            )
                        })
                    }
                </div>
                }
            </div >

        </div >
    )
}

