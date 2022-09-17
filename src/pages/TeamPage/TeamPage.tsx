import { Card, CardGroup, Button} from 'react-bootstrap';

export default function TeamPage() {
// "mx-auto d-flex justify-content-center"
// mx-auto col-md-7
  return (
    <div className="mt-5 py-4 mb-5 pb-5">
      <h6 className="mx-auto container-fluid text-center text-primary">Our Team</h6>
      <h1 className="mt-3 container-fluid font-weight-bold text-center text-dark">Meet the people behind Inspectinator</h1>
      <p className="mt-4 container-fluid font-weight-bold text-center text-muted col-md-8">
        As innovators, we're looking for ways to optimize the workflow of fellow busy New Yorkers. 
        We value the inspectors of this city since they play a key role in enforcing safe and healthy 
        restaurant conditions. Let's make their job easier.
      </p>

      <div className="mt-5 pt-4 mx-5 px-5">
        <CardGroup className="border-0">
          <Card text="dark" className = "border-0">
            <Card.Img variant="top" src="/images/team/founder_CEO.png"/>
            <Card.Body className = "p-0 mt-4">
              <h5>Sabrina Reyes</h5>
              <h6 className='text-primary my-3'>Founder and CEO</h6>
              <p className='text-secondary'>
                Implements project vision through application design. As leader, she resolves 
                any team disputes and has the final say on app specifications. Codes the frontend.
              </p>
            </Card.Body>
          </Card>

          <Card text="dark" className = "border-0 mx-4">
            <Card.Img variant="top" src="/images/team/full_stack_eng.png"/>
            <Card.Body className = "p-0 mt-4">
              <h5>Nishanth Prajith</h5>
              <h6 className='text-primary my-3'>Full Stack Engineer</h6>
              <p className='text-secondary'>
              Well-versed in various web frameworks and services. Through a deep understanding 
              of app architecture, he can easily code new features and resolve app bugs.
              </p>
            </Card.Body>
          </Card>

          <Card text="dark" className = "border-0">
            <Card.Img variant="top" src="/images/team/proj_manager.jpg" />
            <Card.Body className = "p-0 mt-4">
              <h5>Michael Salamon</h5>
              <h6 className='text-primary my-3'>Project Manager</h6>
              <p className='text-secondary'>
              In charge of product research and app specifications. Keeps track of meeting minutes 
              and task assignments. Assists teammates on API implementation/integration.
              </p>
            </Card.Body>
          </Card>

        </CardGroup>
      </div>
    </div>
  );
}