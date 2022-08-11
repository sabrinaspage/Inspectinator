
import { Link } from 'react-router-dom';

import './SignUpPage.css';

export default function SignUpPage() {
    return (
        <div className = "container-fluid h-100">
            <div className = "row vh-100 vw-100">
                <div className = "d-flex align-items-md-center col-lg-6 col-sm-12 justify-content-center">
                    <div className="col-md-8 col-lg-6" style={{textAlign: "left"}}>
                        <h2>Sign Up</h2>
                        <p className = "mt-3 mb-4 fs-6 fst-normal text-black-50">Enter your details below to complete sign up</p>

                        <p className='p-0 pb-1 mt-5 mb-2 fs-8'>Name*</p>
                        <input style = {{borderRadius: '8px'}} type="text" className = "py-2 px-3 form-control" placeholder="Enter your name" />
                        
                        <div className = "p-2"></div>

                        <p className='p-0 pb-1 mb-2 mt-3 fs-8'>Email*</p>
                        <input style = {{borderRadius: '8px'}} type="text" className = "y-2 px-3 form-control" placeholder="Enter your password" />

                        <div className = "p-2"></div>

                        <p className='p-0 pb-1 mb-2 mt-3 fs-8'>Password*</p>
                        <input style = {{borderRadius: '8px'}} type="password" className = "y-2 px-3 form-control" placeholder="Enter your password" />
                        <p className = "mt-2 fs-6 fst-normal text-black-50"><small>Must be atleast 8 characters</small></p>

                        <div className='mt-4'></div>

                        <button style = {{borderRadius: '8px'}} className = "btn w-100 btn-dark p-2 mt-5 bg-dark">Get Started</button>
                        <p className = "text-center mt-3 pb-0 mb-0 fs-6 fst-normal text-black-50">
                            <small>Already have an account?<span> </span>
                            <span className = "text-black" style={{fontWeight: "500"}}>
                                <Link to="/signin">Sign In</Link>
                            </span></small>
                        </p>
                    </div>
                </div>
                <div className = "d-md-none d-lg-block bg-primary d-flex col-lg-6 secondContainer">
                </div>
            </div>
        </div>
    )
}