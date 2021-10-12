import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

import { useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from './Images/user.png';
import axios from 'axios';

export const Home = () => {

    //   const history = useHistory();
    //const [data, setData] = useState([]);

    // const getUser = async (e) => {
    //     try {
    //         const resp = await fetch('http://localhost:3000/users');
    //         const actualData = await resp.json();
    //         console.warn(actualData.users);
    //         setData(actualData.id);
    //         await console.log(data);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // }
    // useEffect(() => {
    //     getUser();
    // }, []);

    const [data, setData] = useState([]);
    const getUser = async () => {
        try {
            const resp = await fetch('https://panorbit.in/api/users.json');
            const actualData = await resp.json();
            console.warn(actualData.users);
            setData(actualData.users)
            await console.log(data)
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    // const getUser = async () => {
    //     const res = await fetch(`https://panorbit.in/api/users.json`);
    //     setData(res.data);
    // }
    // useEffect(() => {
    //     getUser();
    // }, []);
    // console.log(data);
    return (
        <div>

    <svg viewBox="0 0 1440 320">
            <path fill="#5c3cc8" fillOpacity="1" d="M0,192L60,176C120,160,240,128,360,144C480,160,600,224,720,229.3C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
               
    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Table className="Ttable ">
                <thead>
                <tr className="List_header">

                <td colSpan="2">Select an Account</td>
                </tr>
                </thead>
                <tbody>

                           
                {data.map((curElem, ind) => {
                        return (
                            <Link to={`/profile/${curElem.id-1}`} className="btn">
                                <tr key={ind} >
                                    <th><img src={Logo} alt="User" className="Img" /></th>
                                    <th>{curElem.name}</th>
                                </tr>
                            </Link>
                            )
                    })
                }
                </tbody>
                </Table>
                </Row>
                
        </div>
    )
}

