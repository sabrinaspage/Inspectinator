import { Card, Accordion } from "react-bootstrap";
import { FAQ } from "./constants";
import Inspector from "./Inspector.png";
export default function LandingPage() {
  return (
    <div>
      <div
        id="intro-example"
        style={{
          backgroundImage: `url(${Inspector})`,
          backgroundSize: "100%",
          backgroundPosition: "0px -100px",
        }}
      >
        <div>
          <div
            className="h-75"
            style={{
              width: "800px",
              backgroundImage: "linear-gradient(#149BFC, #BBE2FF)",
              borderRadius: "0 100% 100% 0",
            }}
          >
            <div
              className="text-white"
              style={{ width: "100%", padding: "180px 250px 135px 100px" }}
            >
              <h1 className="mb-3">Modernize your inspection workflow.</h1>
              <h4 className="mb-4">
                Work at your convenience by accessing inspection forms across
                your devices. Stay confident knowing secure e-signatures protect
                your inspection process from fraudulent activity.
              </h4>
              <a
                className="btn btn-primary btn-lg"
                href="/signup"
                target="_blank"
                role="button"
              >
                Sign up -- it's free!
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-column mb-5 pt-2">
        <h2 className="mt-5 mb-4">
          Inspectinator prioritizes simplicity. Stay neat and organized.
        </h2>

        <p className="lead w-50 text-center mb-5">
          Let's face it, paperwork can get messy. Papers can get damaged or even
          misplaced. By securing all file uploads to the cloud, we guarantee
          that all your valuable documents will stay in one place right where
          you left off.
        </p>
      </div>

      <div className="container-fluid m-0 p-0 row w-100 px-5">
        <div className="col-lg-6 px-4 d-flex align-items-center">
          <div>
            <h3 className="fw-bold mb-4 text-center">Form Flow</h3>
            <p className="lead text-center">
              Easily navigate form sections, stay updated on progress, and
              receive feedback. Create a new form or continue from where you 
              last left off.
            </p>
          </div>
        </div>
        <div className="col-lg-6 px-4">
          <Card.Img variant="top" src="/images/landing_pg/form_flow.png" />
        </div>
      </div>

      <div className="container-fluid m-0 p-0 row w-100 my-5 py-3 px-5">
        <div className="col-lg-6 px-4">
          <Card.Img variant="top" src="/images/landing_pg/record.png" />
        </div>
        <div className="col-lg-6 px-4 d-flex align-items-center">
          <div>
            <h3 className="fw-bold mb-4 text-center">Record Keeping</h3>
            <p className="lead text-center">
              Previewed forms maintain a history of all your previous inspections
              through read-only fields. Past form responses and signature
              meta-data conveniently stored in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid m-0 p-0 row w-100 px-5">
        <div className="col-lg-6 px-4 d-flex align-items-center">
          <div>
            <h3 className="fw-bold mb-4 text-center">Efficiency</h3>
            <p className="lead text-center">
            No need to fill the entire form! Just the necessary fields.
            </p>
          </div>
        </div>
        <div className="col-lg-6 px-4">
          <Card.Img variant="top" src="/images/landing_pg/custom.png" />
        </div>
      </div>

      <div className="mx-5 px-5 my-5 py-4">
        <hr className="mx-5 px-5" style={{ borderColor: "#a3a3a3" }} />
      </div>

      <div className="mx-auto">
        <h4 className="d-flex justify-content-center fw-bold mb-3">
          Frequently asked questions
        </h4>
        <p className="d-flex justify-content-center text-muted mb-4 pb-2">
          Everything you need to know about the product and how it works
        </p>
      </div>

      {/*FAQ*/}
      <div className="mx-auto d-flex justify-content-center">
        <Accordion
          style={{ width: "52rem", border: "none", paddingBottom: "100px" }}
        >
          {FAQ.map((faq, index) => {
            return (
              <Accordion.Item
                eventKey={index.toLocaleString()}
                className="py-2"
                style={faq.style}
              >
                <Accordion.Header as="p">
                  <strong>{faq.question}</strong>
                </Accordion.Header>
                <Accordion.Body className="text-muted">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
