import React, { useEffect, useState } from "react";
import CardHeader from "../components/CardHeader";
import Button from "../UI/Button";
import "./style/NewPatient.css";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import db from "../Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

toast.configure();

export default function NewPatient() {
  var Firstname = document.getElementById("FirstName");
  var LastName = document.getElementById("LastName");
  var SpouseName = document.getElementById("SpouseName");
  var Age = document.getElementById("Age");
  var Height = document.getElementById("Height");
  var Weight = document.getElementById("Weight");
  var Gender = document.getElementById("Gender");
  var Status = document.getElementById("Status");
  var Occupation = document.getElementById("Occupation");
  var BloodGroup = document.getElementById("BloodGroup");
  var PhoneNumber = document.getElementById("PhoneNumber");
  var Address = document.getElementById("Address");
  const [BG, setBG] = useState([]);
  const [ST,setST] = useState([]);
  const [Genders ,setGender] = useState([]);
  const [IsFormValid, setIsFormValid] = useState(false);
  const initialValue = {
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
  };
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
    var gender = document.getElementById("Gender");
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
    const status = document.getElementById("Status");
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
    const bloodGroup = document.getElementById("BloodGroup");
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

  const addToFirebase = async () => {
    const collectionRef = collection(db, "Patients");
    await addDoc(collectionRef, userInput);
  };
  const SubmitFormHandler = (event) => {
    event.preventDefault();
    // axios.get("http://localhost:85/patient_system/project/patient_system_backend/Connection.php").then((res)=>{console.log(res.data)})
    if (IsFormValid) {
      axios
        .post(
          "http://localhost:85/patient_system/project/patient_system_backend/newPatient.php",
          userInput
        )
        .then((res) => {
          if(res.data ==true){
            notifySuccess("Patient Information inserted Succesfully " );
          }else{
            notifyError("there is an error please try again  !!!"+res.data);
          }
        });
      addToFirebase();
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
      });
      Firstname.value = "";
      LastName.value = "";
      SpouseName.value = "";
      Weight.value = "";
      Height.value = "";
      Occupation.value = "";
      Address.value = "";
      PhoneNumber.value = "";
      Age.value = "";
      Status.selectedIndex = 0;
      BloodGroup.selectedIndex = 0;
      Gender.selectedIndex = 0;
    } else {
      notifyError("please fill all inputs ");
    }
  };
  const notifyError = (errorMSG) => {
    toast.error(errorMSG, {
      position: "top-center",
    });
  };
  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
    });
  };
 useEffect(()=>{
  axios.get("http://localhost:85/patient_system/project/patient_system_backend/FetchBloodGroup.php").then((res)=>{
    setBG(res.data);
  });
 },[])
 useEffect(()=>{
  axios.get("http://localhost:85/patient_system/project/patient_system_backend/FetchStatus.php").then((res)=>{
    setST(res.data);
    console.log(res.data)
  });
 },[])
 useEffect(()=>{
  axios.get("http://localhost:85/patient_system/project/patient_system_backend/FetchGender.php").then((res)=>{
    setGender(res.data);
  });
 },[])

  return (
    <div className="formContainer">
      <div className="card ">
        <CardHeader title="new patient form" />
        <form onSubmit={SubmitFormHandler}>
          <div className="card-body">
            <div className="row rowFormInput">
              {/* row 1  */}
              <div className="col-md-4 inputContainer ">
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
                    id="FirstName"
                  />
                </div>
                <label>
                  {Error.FirstName.length > 0 ? Error.FirstName : ""}
                </label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="LastName"
                  />
                </div>
                <label>{Error.LastName.length > 0 ? Error.LastName : ""}</label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="SpouseName"
                  />
                </div>
                <label>
                  {Error.SpouseName.length > 0 ? Error.SpouseName : ""}
                </label>
              </div>
              {/* row 2 */}
              <div className="col-md-4 px-2 ">
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
                    id="Weight"
                  />
                </div>
                <label>{Error.Weight.length > 0 ? Error.Weight : ""}</label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="Height"
                  />
                </div>
                <label>{Error.Height.length > 0 ? Error.Height : ""}</label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="Occupation"
                  />
                </div>
                <label>
                  {Error.Occupation.length > 0 ? Error.Occupation : ""}
                </label>
              </div>
              {/* row  3 */}
              {/* <div className="col-md-4 px-2 ">
                  <label >Spouse Name</label>
                  <div className="form-group">
                      <input type="text" className="form-control" onChange={} placeholder="Spousename"/>
                  </div>
                </div> */}
              <div className="col-md-4 px-2 ">
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
                    id="Gender"
                    onBlur={GenderHandler}
                  >
                    <option disabled selected>
                      None
                    </option>
                    {Genders.map((gender) => (
                       <option key={gender.Id} value={gender.Id}>{gender.Name}</option>
                    ))}
                   
                     
                  </select>
                </div>
                <label>{Error.Gender.length > 0 ? Error.Gender : ""}</label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="Status"
                    onBlur={StatusHandler}
                  >
                    <option disabled selected>
                      None
                    </option>
                    {ST.map((status)=> (
                      <option value={status.Id} key={status.Id} >{status.Status}</option>
                    ))}
                   
                     
                  </select>
                </div>
                <label>{Error.Status.length > 0 ? Error.Status : ""}</label>
              </div>

              {/* row 4 */}

              <div className="col-md-4 px-2 ">
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
                    id="BloodGroup"
                    onBlur={BloodGroupHandler}
                  >
                    <option key={10} disabled selected>
                      None
                    </option>
                    {BG.map((bg) => (
                      <option key={bg.Id} value={bg.Id}>{bg.Name}</option>
                    ))}
                   
                  </select>
                </div>
                <label>
                  {Error.BloodGroup.length > 0 ? Error.BloodGroup : ""}
                </label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="Age"
                  />
                </div>
                <label>{Error.Age.length > 0 ? Error.Age : ""}</label>
              </div>
              <div className="col-md-4 px-2 ">
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
                    id="PhoneNumber"
                  />
                </div>
                <label>
                  {Error.PhoneNumber.length > 0 ? Error.PhoneNumber : ""}
                </label>
              </div>
              {/* row 5 */}
              <div className="col-md-4 px-2 ">
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
                    id="Address"
                  />
                </div>
                <label>{Error.Address.length > 0 ? Error.Address : ""}</label>
              </div>

              <div className="col-md-4 px-2 ">
                <label>Old Patinet CVs</label>
                <div className="form-group">
                  <input type="file" className="form-control" />
                </div>
              </div>
              <div className="col-md-4 px-2 ">
                <label>New Patinet CVs(Test/Result)</label>
                <div className="form-group">
                  <input type="file" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Button title="Save" type="submit" icon="fa fa-check" />
            <Link to="/PatientList" className="btn btn-outline-dark mx-2">
              Back to List <i className="fa fa-list mx-2"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
