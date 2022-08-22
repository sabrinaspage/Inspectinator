import { Card, CardGroup, Button} from 'react-bootstrap';

export default function TeamPage() {
// "mx-auto d-flex justify-content-center"
  return (
    <div className="mt-5 py-4 mb-5 pb-5">
      <h6 className="mx-auto container-fluid text-center text-primary">The team</h6>
      <h1 className="mt-3 container-fluid font-weight-bold text-center text-dark">Meeting the team behind inspectinator</h1>
      <p className="mt-4 container-fluid font-weight-bold text-center text-secondary">We’re a small team that loves to create great experiences and make meaningful connections between builders and customers.</p>

      <div className="mt-5 pt-4 mx-5 px-5">
        <CardGroup className="border-0">
          <Card text="dark" className = "border-0">
            <Card.Img variant="top" src="https://fakeimg.pl/350x300/?text=Sabrina"/>
            <Card.Body className = "p-0 mt-4">
              <h5>Sabrina Reyes</h5>
              <h6 className='text-primary my-3'>Founder & CEO</h6>
              <p className='text-secondary'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
            </Card.Body>
          </Card>

          <Card text="dark" className = "border-0 mx-4">
            <Card.Img variant="top" src="https://fakeimg.pl/350x300/?text=Sabrina"/>
            <Card.Body className = "p-0 mt-4">
              <h5>Sabrina Reyes</h5>
              <h6 className='text-primary my-3'>Founder & CEO</h6>
              <p className='text-secondary'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
            </Card.Body>
          </Card>

          <Card text="dark" className = "border-0">
            <Card.Img variant="top" src="https://fakeimg.pl/350x300/?text=Sabrina"/>
            <Card.Body className = "p-0 mt-4">
              <h5>Sabrina Reyes</h5>
              <h6 className='text-primary my-3'>Founder & CEO</h6>
              <p className='text-secondary'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
            </Card.Body>
          </Card>

        </CardGroup>
      </div>
    </div>
  );
}