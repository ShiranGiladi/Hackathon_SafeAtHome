import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Login.css';

const Login = () => {
    const navigate = useNavigate()

    const handleLoginBtn = async (e) => {
        e.preventDefault()
        navigate(`/home`)
    }

    return (
        <section className='login-container'>
            <h1>יומן מראה</h1>
            <img src='./images/logo.png' alt='logo'></img>
            <div className='login-form'>
                <h3>התחברות</h3>
                <form>
                    <FloatingLabel label="כתובת אימייל*" className="mb-3">
                        <Form.Control 
                            type="email" 
                            // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            placeholder="name@example.com" 
                        />
                    </FloatingLabel>

                    <FloatingLabel label="סיסמא*">
                        <Form.Control 
                            type="password" 
                            // onChange={(e) => setPassword(e.target.value)}
                            // value={password}
                            placeholder="Password" 
                        />
                    </FloatingLabel>

                    <button className='login-btn' onClick={handleLoginBtn}>Login</button>
                </form>

                <p>Don't have an account? <a href='/'>Sign up</a></p>
            </div>
        </section>
    )
}

export default Login