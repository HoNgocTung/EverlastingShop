import React, { useState } from 'react';
import './login.css';

export const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signIn-signUp">
                <form action="" className="sign-in-form">
                        <h2 className="title">Đăng Nhập</h2>
                        <div className="input-field">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder="User Name" />
                        </div>
                        <div className="input-field">
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <a href='/'className="btn solid"> Đăng nhập </a>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="bx bxl-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </form>
                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder="User Name" />
                        </div>
                        <div className="input-field">
                            <i className='bx bx-envelope'></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <a href="/login" className="btn solid" >Đăng Ký</a>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="bx bxl-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Người Mới</h3>
                        <p>Bạn chưa có tài khoản? Hãy đăng ký tại đây</p>
                        <button className="btn transparent" onClick={handleSignUpClick}>Đăng Ký</button>
                    </div>
                    <img src="img/1.png" alt="" className="img" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Thành Viên</h3>
                        <p>Bạn đã có tài khoản. Hãy đăng nhập tại đây</p>
                        <button className="btn transparent" onClick={handleSignInClick}>Đăng Nhập</button>
                    </div>
                    <img src="img/2.png" alt="" className="img" />
                </div>
            </div>
        </div>
    );
}
