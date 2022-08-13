
import './dashboard.css';
import { RiSearch2Line } from "react-icons/ri";

export default function Dashboard() {
    return (
        <div className = "mt-5 container vh-100">
            <div className='row px-2'>
                <div className = "col-lg-7">
                    <h1 className='fw-bold'>Reports</h1>
                    <p className='mt-3 fs-6 text-black-50'>
                        All document relating to your inspections are stored here.
                    </p>
                </div>
                <div className = "col-lg-2">
                    <h1 className='p-0 mt-3 row'>
                        <p className='fs-5 mb-2 col-lg-2'>
                            <RiSearch2Line/>
                        </p>
                        <input style={{fontSize: "0.95rem"}} type="text" className = "text-secondary simpleSearchbar col-lg-10 y-2 px-2" placeholder="">
                        </input>
                    </h1>
                    <div style = {{height: '1px'}} className="divider bg-secondary"></div>
                </div>
                <div className='col-lg-1'></div>
                <div className = "d-flex align-items-start col-lg-2">
                    <h1 className = "w-100">
                        <button style = {{borderRadius: '8px'}} className = "btn p-2 w-100 btn-dark bg-dark">Create Document</button>
                    </h1>
                </div>
            </div>
            <div className='divider'></div>
            <div className='mt-5 pt-3 h-50'>
                <div className = 'row px-2'>
                    <div className='col-lg-8 text-uppercase'>
                        <p className='text-secondary'>
                            <small>
                                inpsection report name
                            </small>
                        </p>
                    </div>
                    <div className='col-lg-2 text-uppercase'>
                        <p className='text-secondary'>
                            <small>
                                created by
                            </small>
                        </p>
                    </div>
                    <div className='col-lg-2 text-uppercase'>
                        <p className='text-secondary'>
                            <small>
                                status
                            </small>
                        </p>
                    </div>
                </div>
                <div style = {{height: '1px'}} className = "bg-secondary mt-3 mx-2"></div>
                <div className = "mt-5">
                    {
                        Array(12).fill(0).map((value, index) => (
                            <div>
                                <div key={index} className="reports py-4">
                                    <div className='row px-2'>
                                        <div className='d-grid align-items-center col-lg-8'>
                                            <p className='m-0 text-dark' style = {{fontWeight: "500"}}>
                                                {index}_Inpsection report name.pdf
                                            </p>
                                            <p className = "m-0 text-secondary">
                                                <small>
                                                    Dominos Pizza, Times Square
                                                </small>
                                            </p>
                                        </div>
                                        <div className='d-flex align-items-center col-lg-2'>
                                            <p className='m-0 text-secondary'>
                                                12-12-2022
                                            </p>
                                        </div>
                                        <div className='d-flex align-items-center col-lg-2'>
                                            {
                                                (index % 3 === 2) && 
                                                <div style = {{borderRadius: "30px", backgroundColor: "#FEF3F2"}} className = "py-1 px-3">
                                                    <p style = {{color: "#F04438", fontWeight: "500"}} className='m-0'>
                                                        <small>
                                                            Declined
                                                        </small>
                                                    </p>
                                                </div>
                                            }
                                            {
                                                (index % 3 === 1) && 
                                                <div style = {{borderRadius: "30px", backgroundColor: "#ECFDF3"}} className = "py-1 px-3">
                                                    <p style = {{color: "#12B76A", fontWeight: "500"}} className='m-0'>
                                                        <small>
                                                            Signed
                                                        </small>
                                                    </p>
                                                </div>
                                            }
                                            {
                                                (index % 3 === 0) && 
                                                <div style = {{borderRadius: "30px", backgroundColor: "#F2F4F7"}} className = "py-1 px-3">
                                                    <p style = {{color: "#667085", fontWeight: "500"}} className='m-0'>
                                                        <small>
                                                            Processing
                                                        </small>
                                                    </p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div style={{height: '1px', backgroundColor: "#E3E2E2"}} className ="divider"></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}