import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login/Login.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

import {
    addUser

} from "../../server";

const db = 'http://localhost/Api_react_movie/public/api/list-user';
export function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    const [addUserMovie, setUser] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

        };
        fetchAPI();
    }, []);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        // let register = async () => { 
        const form = new FormData();
        form.append("name", name);
        form.append("email", email);
        form.append("password", password);
        //     let repo = await axios.post('http://localhost/Api_react_movie/public/api/list-user', form);
        //     console.log(repo.data);
        // }
        if (password == password_confirmation) {
            axios.post("http://localhost/Passport/public/api/auth/signup", { name, email, password, password_confirmation })
                .then(res => {
                    history.push('login');
                })
                .catch(error => {
                    if (error.response.status == "400") {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Email already exists ',
                            icon: 'error',
                            confirmButtonText: 'Try Again'
                        })
                    }
                });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please Password !',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

    }

    return (

        <div className="main-container">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav>
                                <ul className="menu">
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/">Home</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/discover/tv">TV</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/treding">Treding</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/search">Search</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/profile">Profile</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/login">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/logout">Logout</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/dashboard">Dashboard</a>
                                        </div>
                                    </li>
                                    <li className="nav-hover">
                                        <div className="login-templeta">
                                            <a href="/register">Register</a>
                                        </div>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>

            </div>
            <div className="Login">
                <h2 className="name-login">Movie Login</h2>
                <Form onSubmit={handleSubmit}>
                    <RegisterForm id="name" lable="Name" type="text" value={name} change={(event) => setName(event.target.value)} />
                    <RegisterForm id="email" lable="Email" type="email" value={email} change={(event) => setEmail(event.target.value)} />
                    <RegisterForm id="password" lable="Password" type="password" value={password} change={(event) => setPassword(event.target.value)} />
                    <RegisterForm id="password_confirmation" lable="Confirm Password" type="password" value={password_confirmation} change={(event) => setConfirmPassword(event.target.value)} />
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Register
                    </Button>
                </Form>
            </div>
        </div>

    );
}
function RegisterForm(props) {
    return (
        <Form.Group size="lg" controlId={props.id}>
            <Form.Label>{props.lable}</Form.Label>
            <Form.Control
                type={props.type}
                value={props.name}
                onChange={props.change}
            />
        </Form.Group>

    );
}