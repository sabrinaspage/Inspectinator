import { useNavigate } from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import CardGroup from 'react-bootstrap/CardGroup';
import { Card, Button, CardGroup } from 'react-bootstrap';

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

    </div>
  );
}
