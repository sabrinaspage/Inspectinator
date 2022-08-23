
import {useLocation, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {

    const location = useLocation();

    const [control, setControl] = useState(0);

    useEffect(() => {
        if (location.pathname === '/signin' || location.pathname === '/signup') {
            setControl(1);
        } else {
            setControl(0);
        }
    } , [location]);

    return (
        <div className = "w-100 px-3 navbar mt-2" style={control === 1 ? {position: "absolute", top: "0"} : {}}>
            <div className = "mx-3 w-100 px-3 floatingEffect" style={{padding: "0.75rem 0"}}>
                <div className = "row mx-2">
                    <div className='col-lg-6'>
                        <Link to = {"/"}>
                            <h3 className="p-0 m-0 fs-4 text-dark">Inspectinator</h3>
                        </Link>
                    </div>
                    { (control === 0) &&
                        <div className='col-lg-6 d-flex justify-content-end'>
                            <button className='bg-primary btn' style={{borderRadius: "1000px"}}>
                                <Link to = {"/signin"}>
                                    <p className='text-white px-3 py-1 m-0'>Sign In</p>
                                </Link>
                            </button>
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
}