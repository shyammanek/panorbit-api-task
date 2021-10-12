import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './Images/user.png'
import { Chat } from './Chat';


export const Profile = () => {


    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const [data, setData] = useState({
        company: "",
        address: "",
        geo: "",
    });

    console.log(data)


    useEffect(() => {
        setDatatoStorage();
        getDataFromStorage();

    }, []);

    const addDatatolocalstorage = async () => {
        const { data } = await axios.get(`https://panorbit.in/api/users.json`);
        return data;

    }
    const setDatatoStorage = async () => {
        try {
            setLoading(true);
            const d = await addDatatolocalstorage();
            localStorage.setItem('data', JSON.stringify(d.users));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    const getDataFromStorage = () => {
        try {
            const arrayOfData = localStorage.getItem('data');
            const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
            setData(d[id]);
        } catch (error) {
            console.log(error);
        }
    }

    const [isShow, setIsShow] = React.useState(false);
    const toggleShow = () => {
        setIsShow((prev) => !prev)
    }


    return (
        <div>
            <div className="containera">
                <div className="Main__div">

                <div className="nav">
                <div className="boxnav">
                  <ul>
                    <li>Profile</li>
                    <hr className="line1" />
                    <li>Posts</li>
                    <hr className="line1" />
                    <li>Gallery</li>
                    <hr className="line1" />
                    <li>ToDo</li>
                    <hr className="line1" />
                  </ul>
                </div>
              </div>
              
              <div className="contact">
                <div className="header">
                  <h3>Profile</h3>
                  <h3>{data.name}</h3>
                </div>
                <hr className="line" />
              </div>
        
              <div className="form">
                <div className="imgbox">
                  <img
                    className="profile"
                    src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__480.jpg"
                    alt=""
                    height="150px"
                    width="150px"
                  />
                  <h3>{data.name}</h3>
                </div>
                <div className="content">
                  <ul>
                    <li>Username : <span>{data.username}</span></li>
                    <li>email : <span> {data.email} </span></li>
                    <li>Phone : <span> {data.phone}</span></li>
                    <li>Website : <span> {data.website} </span></li>
                  </ul>
        
                  <h3 className="company">Company</h3>
                  <ul>
                    <li>Name : <span> {data.company.name} </span></li>
                    <li>
                      Catchphrase : <span> {data.company.catchPhrase}</span>
                    </li>
                    <li>Bs : <span> {data.company.bs} </span></li>
                    
                  </ul>
                </div>
              </div>
        
              <div className="map">
                <h3 className="Address">Address:</h3>
                <ul>
                  <li>Street : <span> {data.address.street} </span></li>
                  <li>Suite : <span> {data.address.suite} </span></li>
                  <li>City : <span> {data.address.city}</span></li>
                  <li>Zipcode : <span> {data.address.zipcode} </span></li>
                </ul>
                <Chat />
              </div>
        
                </div>
            </div>
        </div>
    )
}