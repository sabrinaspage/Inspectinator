import { useNavigate } from "react-router-dom";
import TimePicker from "react-time-picker";
import "./AnswerSelectionPage.css";

interface InspectorTimeProps {
  title: string;
}

const InspectorTimePicker = ({ title }: InspectorTimeProps): JSX.Element => {
  return (
    <div className="form-group col-md-3">
      <label htmlFor="timePicker">{title}</label>
      <div className="w-100">
        <TimePicker value={""} className="w-100" />
      </div>
    </div>
  );
};

type FormRowProps = {
  children: JSX.Element | JSX.Element[];
};

const FormRow = ({ children }: FormRowProps) => {
  return <div className="row mt-4"> {children} </div>;
};

export interface BasicInfoProps {
  section: {
    businessName: string;
    operator: string;
    address: string;
    city: string;
    zipCode: string;
    email: string;
    phone: string;
  };
}

export const BasicInfoSection = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <form>
        <FormRow>
          <div className="form-group col-sm-5">
            <label htmlFor="inputEmail4">Business Name</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
            <button
              style={{ borderRadius: "8px" }}
              className="btn p-1 w-50 btn-light bg-light border border-secondary mt-2"
            >
              Add new company
            </button>
          </div>
          <div className="form-group col-sm-4">
            <label htmlFor="inputPassword4">Operator</label>
            <input
              className="form-control"
              id="inputPassword4"
              placeholder="Operator"
            />
          </div>
          <div className="form-group col-sm-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </FormRow>
        <FormRow>
          <div className="form-group col-md-5">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-1">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </FormRow>
        <FormRow>
          <InspectorTimePicker title="Time In" />
          <InspectorTimePicker title="Office Time" />
          <InspectorTimePicker title="Activity Time" />
          <InspectorTimePicker title="Travel Time" />
        </FormRow>
        <FormRow>
          <div className="d-flex align-items-start col-md-2">
            <h1 className="w-100">
              <button
                onClick={() => navigate(-1)}
                style={{ borderRadius: "8px" }}
                className="btn p-2 w-100 btn-light bg-light border border-secondary"
              >
                Go Back
              </button>
            </h1>
          </div>
          <div className="col-md-8"></div>
          <div className="d-flex align-items-start col-md-2">
            <h1 className="w-100">
              <button
                onClick={() => navigate(-1)}
                style={{ borderRadius: "8px" }}
                className="btn p-2 w-100 btn-dark bg-dark"
              >
                Save
              </button>
            </h1>
          </div>
        </FormRow>
      </form>
    </div>
  );
};
