import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TimePicker from "react-time-picker";

import { AuthContext } from "../../../contexts/AuthContext";

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

  var BusinessName = useRef<HTMLInputElement>(null);
  var Operator = useRef<HTMLInputElement>(null);
  var Address = useRef<HTMLInputElement>(null);
  var City = useRef<HTMLInputElement>(null);
  var ZipCode = useRef<HTMLInputElement>(null);
  var PhoneNumber = useRef<HTMLInputElement>(null);
  var State = useRef<HTMLInputElement>(null);

  const auth = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(auth.basicInformation).length > 0) {
      var temp = auth.basicInformation[0];
      BusinessName.current!.value = temp.businessName;
      Operator.current!.value = temp.operator;
      Address.current!.value = temp.address;
      City.current!.value = temp.city;
      ZipCode.current!.value = temp.zipCode;
      PhoneNumber.current!.value = temp.phoneNumber;
    } else {
      console.log("No basic information");
    }
  }, []);


  function saveInfo(event: { preventDefault: () => void; }) {
    event.preventDefault();
    var businessName = BusinessName.current!.value;
    var operator = Operator.current!.value;
    var address = Address.current!.value;
    var city = City.current!.value;
    var zipCode = ZipCode.current!.value;
    var phoneNumber = PhoneNumber.current!.value;

    if (businessName === "" || operator === "" || address === "" || city === "" || zipCode === "" || phoneNumber === "") {
      alert("Please fill out all fields");
    } else {
      alert("Information saved");
      var info = {
        businessName: businessName,
        operator: operator,
        address: address,
        city: city,
        zipCode: zipCode,
        phoneNumber: phoneNumber
      };
      auth.setBasicInformation([info]);
      navigate("../sectionSelection");
    }
  }


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
              ref = {BusinessName}
              required
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
              ref = {Operator}
              required
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
              ref = {PhoneNumber}
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
              ref = {Address}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" ref={City} required/>
          </div>
          <div className="form-group col-md-1">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option>Choose...</option>
              <option>NY</option>
              <option>CA</option>
              <option>NJ</option>
              <option>PA</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" ref={ZipCode} required/>
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
                onClick={() => navigate('/sectionSelection')}
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
                onClick={saveInfo}
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
