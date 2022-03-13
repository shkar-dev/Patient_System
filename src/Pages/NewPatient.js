import React, { useState } from "react";
import CardHeader from "../components/CardHeader";
import Button from "../UI/Button";
import "./style/NewPatient.css";
import {addDoc,collection , onSnapshot} from "firebase/firestore"
import db from '../Firebase'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
 toast.configure()
export default function NewPatient() {
  const [IsFormValid, setIsFormValid] = useState(false);
  const [userInput, setUserInput] = useState({
    FirstName: "",
    LastName: "",
    SpouseName: "",
    Weight: "",
    Height: "",
    Occupation: "",
    Gender: "",
    Status: "",
    BloodGroup: "",
    Age: "",
    PhoneNumber: "",
    Address: "",
  });
  const [Error, setError] = useState({
    FirstName: "",
    LastName: "",
    SpouseName: "",
    Weight: "",
    Height: "",
    Occupation: "",
    Gender: "",
    Status: "",
    BloodGroup: "",
    Age: "",
    PhoneNumber: "",
    Address: "",
  });

  // firstname
  const FirstNameHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, FirstName: "FirstName is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, FirstName: "FirstName is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, FirstName: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, FirstName: event.target.value };
        });
      }
    }
  };

  //lastname
  const LastNameHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, LastName: "LastName is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, LastName: "LastName is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, LastName: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, LastName: event.target.value };
        });
      }
    }
  };

  // spouse name
  const SpouseNameHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, SpouseName: "SpouseName is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, SpouseName: "SpouseName is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, SpouseName: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, SpouseName: event.target.value };
        });
      }
    }
  };

  // Weight
  const WeightHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Weight: "Weight is empty" };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, Weight: "" };
      });
      setUserInput((prevState) => {
        return { ...prevState, Weight: event.target.value };
      });
    }
  };

  // Height
  const HeightHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Height: "Height is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, Height: "Height is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, Height: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, Height: event.target.value };
        });
      }
    }
  };

  // Occupation
  const OccupationHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Occupation: "Occupation is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, Occupation: "Occupation is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, Occupation: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, Occupation: event.target.value };
        });
      }
    }
  };

  // Gender
  const GenderHandler = (event) => {
    var gender = document.getElementById("gender");
    if (gender.selectedIndex < 1) {
      setError((prevState) => {
        return { ...prevState, Gender: "Gender is not selected " };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, Gender: "" };
      });
      setUserInput((prevState) => {
        return { ...prevState, Gender: event.target.value };
      });
    }
  };

  // status
  const StatusHandler = (event) => {
    const status = document.getElementById("status");
    if (status.selectedIndex < 1) {
      setError((prevState) => {
        return { ...prevState, Status: "Status is not selected" };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, Status: "" };
      });
      setUserInput((prevState) => {
        return { ...prevState, Status: event.target.value };
      });
    }
  };

  // bloodgroup
  const BloodGroupHandler = (event) => {
    const bloodGroup = document.getElementById("bloodGroup");
    if (bloodGroup.selectedIndex < 1) {
      setError((prevState) => {
        return { ...prevState, BloodGroup: "BloodGroup is  not selected " };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, BloodGroup: "" };
      });
      setUserInput((prevState) => {
        return { ...prevState, BloodGroup: event.target.value };
      });
    }
  };

  // age
  const AgeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Age: "Age is empty" };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, Age: "" };
      });
      setUserInput((prevState) => {
        return { ...prevState, Age: event.target.value };
      });
    }
  };

  // phone number
  const PhoneNumberHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, PhoneNumber: "PhoneNumber is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, PhoneNumber: "PhoneNumber is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, PhoneNumber: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, PhoneNumber: event.target.value };
        });
      }
    }
  };

  // Address
  const AddressHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Address: "Address is empty" };
      });
      setIsFormValid(false);
    } else {
      if (event.target.value.trim().length < 3) {
        setError((prevState) => {
          return { ...prevState, Address: "Address is less than 3" };
        });
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
        setError((prevState) => {
          return { ...prevState, Address: "" };
        });
        setUserInput((prevState) => {
          return { ...prevState, Address: event.target.value };
        });
      }
    }
  };


  const addToFirebase  = async ()=>{
    const collectionRef = collection(db,"Patients");
    await addDoc(collectionRef ,userInput);
  }
  const SubmitFormHandler = (event) => {
    event.preventDefault();
    if(IsFormValid){
      addToFirebase();
      notifySuccess();
      setUserInput({
        FirstName: "",
        LastName: "",
        SpouseName: "",
        Weight: "",
        Height: "",
        Occupation: "",
        Gender: "",
        Status: "",
        BloodGroup: "",
        Age: "",
        PhoneNumber: "",
        Address: "",
      })
    }else{
       notifyError();
    }
  };
  const notifyError = ()=>{
    toast.error("there is an error" , {
      position: "top-center" 
    })
  }
  const notifySuccess = () =>{
    toast.success("Information Inserted ",{
      position:"top-center" 
    })
  }

  return (
    <div class="formContainer">
      <div class="card ">
        <CardHeader title="new patient form" />
        <form onSubmit={SubmitFormHandler}>
          <div class="card-body">
            <div class="row rowFormInput">
              {/* row 1  */}
              <div class="col-md-4 inputContainer ">
                <label>Firstname</label>
                <div
                  className={`form-group  ${
                    Error.FirstName.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.FirstName.length > 0 ? "is-invalid" : ""
                    }`}
                    placeholder="Firstname"
                    onChange={FirstNameHandler}
                  />
                </div>
                <label>{Error.FirstName.length > 0 ? Error.FirstName : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Lastname</label>
                <div
                  className={`form-group  ${
                    Error.LastName.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.LastName.length > 0 ? "is-invalid" : ""
                    }`}
                    placeholder="Lastname"
                    onChange={LastNameHandler}
                  />
                </div>
                <label>{Error.LastName.length > 0 ? Error.LastName : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Spouse Name</label>
                <div
                  className={`form-group  ${
                    Error.SpouseName.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.SpouseName.length > 0 ? "is-invalid" : ""
                    }`}
                    placeholder="Spousename"
                    onChange={SpouseNameHandler}
                  />
                </div>
                <label>{Error.SpouseName.length > 0 ? Error.SpouseName : ''}</label>
              </div>
              {/* row 2 */}
              <div class="col-md-4 px-2 ">
                <label>Weight</label>
                <div
                  className={`form-group  ${
                    Error.Weight.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Weight.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={WeightHandler}
                    placeholder="Weight"
                  />
                </div>
                <label>{Error.Weight.length > 0 ? Error.Weight : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Height</label>
                <div
                  className={`form-group  ${
                    Error.Height.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Height.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={HeightHandler}
                    placeholder="Height"
                  />
                </div>
                <label>{Error.Height.length > 0 ? Error.Height : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Occupation</label>
                <div
                  className={`form-group  ${
                    Error.Occupation.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Occupation.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={OccupationHandler}
                    placeholder="Occupation"
                  />
                </div>
                <label>{Error.Occupation.length > 0 ? Error.Occupation : ''}</label>
              </div>
              {/* row  3 */}
              {/* <div class="col-md-4 px-2 ">
                  <label >Spouse Name</label>
                  <div class="form-group">
                      <input type="text" class="form-control" onChange={} placeholder="Spousename"/>
                  </div>
                </div> */}
              <div class="col-md-4 px-2 ">
                <label>Gender </label>
                <div
                  className={`form-group  ${
                    Error.Gender.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <select
                    className={`form-control  ${
                      Error.Gender.length > 0 ? "is-invalid" : ""
                    }`}
                    id="gender"
                    onBlur={GenderHandler}
                  >
                    <option disabled selected>
                      None
                    </option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                    <option value="2">Others</option>
                  </select>
                </div>
                <label>{Error.Gender.length > 0 ? Error.Gender : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Status </label>
                <div
                  className={`form-group  ${
                    Error.Status.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <select
                    className={`form-control  ${
                      Error.Status.length > 0 ? "is-invalid" : ""
                    }`}
                    id="status"
                    onBlur={StatusHandler}
                  >
                    <option disabled selected>
                      None
                    </option>
                    <option value="0">Married</option>
                    <option value="1">Single</option>
                  </select>
                </div>
                <label>{Error.Status.length > 0 ? Error.Status : ''}</label>
              </div>

              {/* row 4 */}

              <div class="col-md-4 px-2 ">
                <label>Blood Group </label>
                <div
                  className={`form-group  ${
                    Error.BloodGroup.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <select
                    className={`form-control  ${
                      Error.BloodGroup.length > 0 ? "is-invalid" : ""
                    }`}
                    id="bloodGroup"
                    onBlur={BloodGroupHandler}
                  >
                    <option disabled selected>
                      None
                    </option>
                    <option value="8">AB+</option>
                    <option value="1">AB-</option>
                    <option value="2">O+</option>
                    <option value="3">O-</option>
                    <option value="4">A+</option>
                    <option value="5">A-</option>
                    <option value="6">B+</option>
                    <option value="7">B-</option>
                  </select>
                </div>
                <label>{Error.BloodGroup.length > 0 ? Error.BloodGroup : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Age</label>
                <div
                  className={`form-group  ${
                    Error.Age.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Age.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={AgeHandler}
                    placeholder="Age"
                  />
                </div>
                <label>{Error.Age.length > 0 ? Error.Age : ''}</label>
              </div>
              <div class="col-md-4 px-2 ">
                <label>Phone Number</label>
                <div
                  className={`form-group  ${
                    Error.PhoneNumber.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.PhoneNumber.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={PhoneNumberHandler}
                    placeholder="Phone Number"
                  />
                </div>
                <label>{Error.PhoneNumber.length > 0 ? Error.PhoneNumber : ''}</label>
              </div>
              {/* row 5 */}
              <div class="col-md-4 px-2 ">
                <label>Address </label>
                <div
                  className={`form-group  ${
                    Error.Address.length === 0 ? "" : " has-danger"
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Address.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={AddressHandler}
                    placeholder="Address"
                  />
                </div>
                <label>{Error.Address.length > 0 ? Error.Address : ''}</label>
              </div>

              <div class="col-md-4 px-2 ">
                <label>Old Patinet CVs</label>
                <div class="form-group">
                  <input type="file" class="form-control" />
                </div>
              </div>
              <div class="col-md-4 px-2 ">
                <label>New Patinet CVs(Test/Result)</label>
                <div class="form-group">
                  <input type="file" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <Button title="Save" type="submit" icon="fa fa-check" />
            <Button title="Clear All" icon="fa fa-eraser" type="reset" />
          </div>
        </form>
      </div>
    </div>
  );
}
