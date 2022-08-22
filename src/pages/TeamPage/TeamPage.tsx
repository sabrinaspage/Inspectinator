import { Card, CardGroup, Button} from 'react-bootstrap';

export default function TeamPage() {
// "mx-auto d-flex justify-content-center"
  return (
    <div>
      <h1 className="mx-auto d-flex col-md-1 display-4">Team</h1>
      <p></p>

      <div className="mx-auto col-md-7">
        <CardGroup style={{ width: '54rem' }}>
        <Card bg={"primary"} text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://fakeimg.pl/350x300/?text=Sabrina" style={{ width: '18rem' }}/>
          <Card.Header as="h4">Team Leader</Card.Header>
          <Card.Body>
            <Card.Text as="p" className="lead">
              Implements project vision. Designs application. Final say in project specifications. 
              Tweaks teammates code. Resolves disputes.
            </Card.Text>
            <Card.Footer>
                <Button href="https://github.com/sabrinaspage" variant="light">GitHub</Button>
                {' '}
                <Button href="https://www.google.com/" variant="light">Website</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card bg={"primary"} text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://fakeimg.pl/350x300/?text=Nishanth" style={{ width: '18rem' }}/>
          <Card.Header as="h4">Techsmith</Card.Header>
          <Card.Body>
            <Card.Text as="p" className="lead">
              Deep understanding of project architecture. First to resolve application bugs. 
              Implements various tech frameworks and services.
            </Card.Text>
              <Card.Footer>
                <Button href="https://github.com/NishanthPrajith" variant="light">GitHub</Button>
                {' '}
                <Button href="https://www.google.com/" variant="light">Website</Button>
              </Card.Footer>
          </Card.Body>
        </Card>

        <Card bg={"primary"} text="light" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://fakeimg.pl/350x300/?text=Michael" style={{ width: '18rem' }}/>
          <Card.Header as="h4">Team Writer</Card.Header>
          <Card.Body>
            <Card.Text as="p" className="lead">
              In charge of documentation. Pitches project ideas and specifications. Assists teammates 
              in implementation of features and frontend.
            </Card.Text>
            <Card.Footer>
              <Button href="https://github.com/MichaelSalSail" variant="light">GitHub</Button>
              {' '}
              <Button href="https://www.linkedin.com/in/michaelsalamoncyber/" variant="light">LinkedIn</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
        </CardGroup>
      </div>
    </div>
  );
}