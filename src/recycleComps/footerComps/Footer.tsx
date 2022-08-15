

export default function Footer() {
    return (
        <div className = "px-5 bg-dark py-3">
            <div className="px-5 mx-4 py-1">
                <div className="row container-fluid text-light py-2">
                    <div className="col-lg-3 d-flex align-items-center">
                        <h4 className = "m-0 p-0 fs-5">Inspectinator</h4>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className = "px-4">
                            About
                        </div>
                        <div className = "px-4">
                            Team
                        </div>
                        <div className = "px-4">
                            FAQ
                        </div>
                        <div className = "px-4">
                            Contact
                        </div>
                    </div>
                    <div className = "col-lg-3 d-flex align-items-center justify-content-end">
                        <p className = "m-0 p-0" style={{textAlign: "right"}}>&copy; 2022 Inspectinator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}