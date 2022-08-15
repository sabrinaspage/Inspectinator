
import './navbar.css';

export default function Navbar() {
    return (
        <div className = "w-100 px-5 navbar mt-2">
            <div className = "mx-5 bg-white w-100 px-3 floatingEffect" style={{padding: "0.75rem 0"}}>
                <div className = "row mx-2">
                    <div className='col-lg-6'>
                        <h3 className="p-0 m-0 fs-4">Inspectinator</h3>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-end'>
                        <button className='bg-dark btn' style={{borderRadius: "1000px"}}>
                            <p className='text-white px-3 py-1 m-0'>Sign In</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}