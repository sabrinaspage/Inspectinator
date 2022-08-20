import { useNavigate } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Button, CardGroup, ListGroup, Accordion} from 'react-bootstrap';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mx-auto d-flex col-md-7 offset-md-3">
        {/*Main pitch*/}
        <Card bg={"primary"} text="light" style={{ width: '36rem' }}>
          <Card.Header as="h1">
            Inspectors deserve better. Modernize your inspection workflow.
          </Card.Header>
          <Card.Body>
            <p className="lead">
              Work at your convenience by accessing inspection forms across your devices.
              Stay confident knowing secure e-signatures protect your inspection process 
              from fraudulent activity. 
            </p>
          </Card.Body>
          <Button variant="outline-light">Sign up - it's free!</Button>
        </Card>

        {/*Main pitch accompanying images*/}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://fakeimg.pl/350x225/?text=Laptop and iPad" />
          <Card.Img variant="bottom" src="https://fakeimg.pl/350x225/?text=Handshake" />
        </Card>
      </div>
      
      {/*Secondary pitch*/}
      <div className="mx-auto col-md-7">
        <p></p>
        <h2>Inspectinator prioritizes simplicity. Stay neat and organized.</h2>
        <p></p>

        <p></p>
        <p className="lead">
          Let's face it, paperwork can get messy. Papers can get damaged or even misplaced.
          By securing all file uploads to the cloud, we guarantee that all your valuable 
          documents will stay in one place right where you left off.
        </p>
        <p></p>
      </div>

      {/*Secondary pitch accompanying images*/}
      <div className="mx-auto col-md-7">
        <CardGroup style={{ width: '55rem' }}>
          <Card style={{ width: '18rem' }} border="light">
            <Card.Img variant="top" src="https://fakeimg.pl/300x200/?text=Messy Papers" style={{ width: '18rem' }}/>
          </Card>
          <Card style={{ width: '18rem' }} border="light">
            <Card.Img variant="top" src="https://fakeimg.pl/300x200/?text=Lock, Cloud" style={{ width: '18rem' }}/>
          </Card>
          <Card style={{ width: '18rem' }} border="light">
            <Card.Img variant="top" src="https://fakeimg.pl/300x200/?text=PDF" style={{ width: '18rem' }}/>
          </Card>
        </CardGroup>
      </div>

      <div className="mx-auto col-md-7">
        <p></p>
        <h2 className="d-flex justify-content-center">Features</h2>
        <p></p>
      </div>

      {/*Features*/}
      <div className="mx-auto d-flex col-md-7">
        <Card style={{ width: '11rem' }}>
          <ListGroup variant="flush" className="lead">
            <ListGroup.Item as="p"><strong>Form Flow</strong></ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: '43rem' }}>
          <ListGroup variant="flush" className="lead">
            <ListGroup.Item>
              Easily navigate form sections, stay updated on progress, and receive feedback.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div className="mx-auto d-flex col-md-7">
        <Card style={{ width: '11rem' }}>
          <ListGroup variant="flush" className="lead">
            <ListGroup.Item as="p"><strong>Customizability</strong></ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: '43rem' }}>
          <ListGroup variant="flush" className="lead">
            <ListGroup.Item>
              Create new form fields or even entirely new sections. Design as you see fit.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div className="mx-auto d-flex col-md-7">
        <Card style={{ width: '11rem' }}>
          <ListGroup variant="flush" className="lead">
            <ListGroup.Item as="p"><strong>Record Keeping</strong></ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{ width: '43rem' }}>
          <ListGroup variant="flush" className="lead">
            <ListGroup.Item>
              Archived forms maintain a history of all your previous inspections.
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div className="mx-auto col-md-7">
        <p></p>
        <h2 className="d-flex justify-content-center">FAQ</h2>
        <p></p>
      </div>

      {/*FAQ*/}
      <div className="mx-auto col-md-7 d-flex justify-content-center">
        <Card bg={"primary"}>       
          <Accordion style={{ width: '53rem' }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header as="p">
                <strong>What's the difference between paperwork and online forms?</strong>
              </Accordion.Header>
              <Accordion.Body className="lead">
                For paper forms, you legibly print all form data and get a client signature on-site. 
                For online forms, you can continually update your form fields upon login. 
                When you need a client signature, tell them to register so you can grant access to 
                your forms signature field.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header as="p">
                <strong>How do e-signatures work?</strong>
              </Accordion.Header>
              <Accordion.Body className="lead">
              An e-signature is a protected and legally binding online signature, 
              just like a handwritten signature. Although there are many online services that offer 
              e-signatures, we use HelloSign. As noted on their website, each signature must come from a 
              separate account. If different names were to be signed from a single HelloSign account, 
              it would threaten the integrity of the signatures, and could potentially invalidate a 
              document signed in this manner. To do an e-signature, one only needs to login to their 
              account and type their full name.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header as ="p">
                <strong>What if your system encounters an error and I lose all my data? Can you recover it?
                Are you liable?</strong>
              </Accordion.Header>
              <Accordion.Body className="lead">
                We store all your data in a database on the cloud. In the very unlikely scenario that our 
                database is compromised, we regularly create backups to ensure you still have your data. 
                We are responsible for your data and are liable for any setbacks. Regardless, feel free 
                to download PDF versions of your forms locally on your computer or even print them out. 
                Stay in control of all your data.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header as="p">
                <strong>I'm both an inspector and a restaurant owner. Can I do a self inspection through the 
                online form?</strong>
              </Accordion.Header>
              <Accordion.Body className="lead">
                Yes, just sign-off on both the inspector and client signature fields.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header as="p">
                <strong>I'm not tech-savvy. Should I still give this a shot?</strong>
              </Accordion.Header>
              <Accordion.Body className="lead">
                Upon successful registration, you're all set! Build your workspace and fill out your forms. 
                Inspectinator is desgined to be very user friendly. If you do encouter any problems or 
                issues, contact us and we'll be sure to get back to you as soon as possible.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Card>

      </div>
  </div>
  );
}
