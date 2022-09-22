import { Card, Button, CardGroup, ListGroup, Accordion} from 'react-bootstrap';


import {Link} from 'react-router-dom';
export default function LandingPage() {

  return (
    <div className='my-5 py-5'>

      <div className="d-flex justify-content-center align-items-center flex-column mb-5 mt-3">
        <h1 className='fw-bold display-7 mb-4 text-center'>Inspectors deserve better.<br/> Modernize your inspection workflow.</h1>

        <p className="lead w-50 text-center mb-3">
          Work at your convenience by accessing inspection forms across your devices.
          Stay confident knowing secure e-signatures protect your inspection process 
          from fraudulent activity. 
        </p>

        <Link to='/signin'>
          <Button className="mt-4 py-2 px-3 mb-3">Sign up - it's free!</Button>
        </Link>
      </div>

      <Card.Img className = "p-0 m-0" variant="top" src="/images/landing_pg/devices.png"/>

      <div className = "mx-5 px-5 mb-5 mt-0 pb-4 pt-0 mt-0">
        <hr className='mx-5 px-5' style = {{borderColor: "#a3a3a3"}} />
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column mb-5">
        <p className='text-primary text-center fw-bold'>Features</p>
        
        <h2 className = "mt-1 mb-4">Inspectinator prioritizes simplicity. Stay neat and organized.</h2>

        <p className='lead w-50 text-center mb-5'>
          Let's face it, paperwork can get messy. Papers can get damaged or even misplaced.
          By securing all file uploads to the cloud, we guarantee that all your valuable 
          documents will stay in one place right where you left off.
        </p>
      </div>

      <div className='container-fluid m-0 p-0 row w-100'>
        <div className = "col-lg-6 px-4 d-flex align-items-center">
          <div>
            <h3 className='fw-bold mb-4 text-center'>Form Flow</h3>
            <p className = "lead text-center">
              Easily navigate form sections, stay updated on progress, and receive feedback.
              Attach notes to responses.
            </p>
          </div>
        </div>
        <div className = "col-lg-6 px-4">
          <Card.Img variant="top" src="/images/landing_pg/form_flow.png"/>
        </div>
      </div>

      <div className='container-fluid m-0 p-0 row w-100 my-5 py-3'>
        <div className = "col-lg-6 px-4">
          <Card.Img variant="top" src="/images/landing_pg/record.png"/>
        </div>
        <div className = "col-lg-6 px-4 d-flex align-items-center">
          <div>
            <h3 className='fw-bold mb-4 text-center'>Record Keeping</h3>
            <p className = "lead text-center">
              Archived forms maintain a history of all your previous inspections
              through read-only documents. Past form responses and signature 
              meta-data conveniently stored in one place.
            </p>
          </div>
        </div>
      </div>

      <div className='container-fluid m-0 p-0 row w-100'>
        <div className = "col-lg-6 px-4 d-flex align-items-center">
          <div>
            <h3 className='fw-bold mb-4 text-center'>Customizability</h3>
            <p className = "lead text-center">Create new form fields or even entirely new sections. Design as you see fit.</p>
          </div>
        </div>
        <div className = "col-lg-6 px-4">
          <Card.Img variant="top" src="/images/landing_pg/custom.png"/>
        </div>
      </div>

      <div className = "mx-5 px-5 my-5 py-4">
        <hr className='mx-5 px-5' style = {{borderColor: "#a3a3a3"}} />
      </div>

      <div className="mx-auto">
        <h4 className="d-flex justify-content-center fw-bold mb-3">Frequently asked questions</h4>
        <p className="d-flex justify-content-center text-muted mb-4 pb-2">Everything you need to know about the product and how it works</p>
      </div>

      {/*FAQ*/}
      <div className="mx-auto d-flex justify-content-center">  

        <Accordion style={{ width: '52rem', border: "none" }}>
          <Accordion.Item eventKey="0" className="py-2" style = {{borderTop: "none", borderLeft: "none", borderRight: "none"}}>
            <Accordion.Header as="p">
              <strong>What's the difference between paperwork and online forms?</strong>
            </Accordion.Header>
            <Accordion.Body className="text-muted">
              For paper forms, you legibly print all form data and get a client signature on-site. 
              For online forms, you can continually update your form fields upon login. 
              When you need a client signature, tell them to register so you can grant access to 
              your forms signature field.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="py-2" style = {{borderTop: "none", borderLeft: "none", borderRight: "none"}}>
            <Accordion.Header as="p">
              <strong>How do e-signatures work?</strong>
            </Accordion.Header>
            <Accordion.Body className="text-muted">
            An e-signature is a protected and legally binding online signature, 
            just like a handwritten signature. Although there are many online services that offer 
            e-signatures, we use HelloSign. As noted on their website, each signature must come from a 
            separate account. If different names were to be signed from a single HelloSign account, 
            it would threaten the integrity of the signatures, and could potentially invalidate a 
            document signed in this manner. To do an e-signature, one only needs to login to their 
            account and type their full name.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="py-2" style = {{borderTop: "none", borderLeft: "none", borderRight: "none"}}>
            <Accordion.Header as ="p">
              <strong>What if your system encounters an error and I lose all my data? Can you recover it?
              Are you liable?</strong>
            </Accordion.Header>
            <Accordion.Body className="text-muted">
              We store all your data in a database on the cloud. In the very unlikely scenario that our 
              database is compromised, we regularly create backups to ensure you still have your data. 
              We are responsible for your data and are liable for any setbacks. Regardless, feel free 
              to download PDF versions of your forms locally on your computer or even print them out. 
              Stay in control of all your data.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="py-2" style = {{borderTop: "none", borderLeft: "none", borderRight: "none"}}>
            <Accordion.Header as="p">
              <strong>I'm both an inspector and a restaurant owner. Can I do a self inspection through the 
              online form?</strong>
            </Accordion.Header>
            <Accordion.Body className="text-muted">
              Yes, just sign-off on both the inspector and client signature fields.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className="py-2" style = {{border: "none"}}>
            <Accordion.Header as="p">
              <strong>I'm not tech-savvy. Should I still give this a shot?</strong>
            </Accordion.Header>
            <Accordion.Body className="text-muted">
              Upon successful registration, you're all set! Build your workspace and fill out your forms. 
              Inspectinator is designed to be very user friendly. If you do encounter any problems or 
              issues, contact us and we'll be sure to get back to you as soon as possible.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    </div>
  );
}
