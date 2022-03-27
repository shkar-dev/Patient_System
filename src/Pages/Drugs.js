import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../UI/Modal";
import "./style/Drugs.css";

function Drugs() {
  var genericInput = document.getElementById("Generic");
  var tradeInput = document.getElementById("Trade");
  const [drug, setDrug] = useState({
    Generic: "",
    Trade: "",
    NewDrug : false,
  });
  const [Error, setError] = useState({
    Generic: "",
    Trade: "",
  });
  const [drugId, setDrugId]=  useState({
    Id : null
  })
  const [FetchedDrug , setFetchedDrug] = useState([]);
  const [IsFormValid, setIsFormValid] = useState(false);
  const genericHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Generic: "Generic Name is empty" };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, Generic: "" };
      });
      setDrug((prevState) => {
        return { ...prevState, Generic: event.target.value };
      });
    }
  };
  const tradeHandler = (event) => {
    if (event.target.value.trim().length === 0) {
      setError((prevState) => {
        return { ...prevState, Trade: "Trade Name is empty" };
      });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setError((prevState) => {
        return { ...prevState, Trade: "" };
      });
      setDrug((prevState) => {
        return { ...prevState, Trade: event.target.value };
      });
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (IsFormValid) {
      axios
        .post(
          "http://localhost:85/patient_system/project/patient_system_backend/NewDrug.php",drug
        )
        .then((res) => {
          if (res.data) {
            setDrug({
              Generic : '',
              Trade :'',
              NewDrug : true
            })
            genericInput.value = '';
            tradeInput.value = '';
            FetchedDrug.push(drug);
            notifySuccess("Drug Inserted successfully ");
          } else {
            notifyFailed("There is an Error !");
          }
        });
    } else {
      notifyFailed("Please fill all inputs !!");
    }
  };
  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
    });
  };
  const notifyFailed = (msg) => {
    toast.error(msg, {
      position: "top-center",
    });
  };
  useEffect(() => {
    axios
      .get(
        "http://localhost:85/patient_system/project/patient_system_backend/FetchDrugs.php"
      )
      .then((res) => {
        setFetchedDrug(res.data);
        setDrug({...drug, NewDrug :false});
      });
  }, [FetchedDrug]); 
  const deleteDrugHandler =(e)=>{
     setDrugId({Id : e.currentTarget.getAttribute("data-value")});
  }
  const verifyDeletion =  (IsDeleted)=>{
    if(drugId.Id != null){
      if(IsDeleted){
        axios.post("http://localhost:85/patient_system/project/patient_system_backend/DeleteDrug.php",drugId).then((res)=>{
          if(res.data){
            console.log(FetchedDrug);
            FetchedDrug.pop(drugId.Id);
            console.log(FetchedDrug);
            notifySuccess("Drug deleted Successfully");
          }else{
            notifyFailed("There is an error occured !")
          }
        })
      }
    }
  }
  
  return (
    <div className="formContainer">
      <Modal Content = "are you sure want to delete this drug" Title = "Delete Drug Alert" Verify={verifyDeletion} ></Modal>
      <div className="card ">
        <div className="card-header bg-white border-bottom  ">
          <h2>Drugs</h2>
        </div>
        <form onSubmit={formSubmitHandler}>
          <div className="card-body">
            <div
              className="row rowFormInput"
              style={{ justifyContent: "center" }}
            >
              {/* row 1  */}
              <div className="col-md-4 inputContainer ">
                <label>Generic Name</label>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Generic.length >= 1 ? "is-invalid" : ""
                    }`}
                    onChange={genericHandler}
                    id="Generic"
                    placeholder="Generic Name"
                    
                  />
                </div>
                <label>{Error.Generic.length > 0 ? Error.Generic : ""}</label>
              </div>
              <div className="col-md-4 px-2 ">
                <label>Trade Name</label>
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control ${
                      Error.Trade.length > 0 ? "is-invalid" : ""
                    }`}
                    onChange={tradeHandler}
                    id="Trade"
                    placeholder="Trade Name"
                     
                  />
                </div>
                <label>{Error.Trade.length > 0 ? Error.Trade : ""}</label>
              </div>
              <div className="col-md-2 px-2  pt-4">
                <div className="form-group pt-1">
                  <button className="btn btn-dark mx-2">
                    {" "}
                    Save <i className="fa fa-check mx-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* we need a search box here  */}
        <div className="card-body">
          {FetchedDrug.length != 0 ? (
            <div className="table-responsive">
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">
                    #
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Generic Name
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Trade Name
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Edit
                  </th>
                  <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                   Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {FetchedDrug.map((drug)=>(
                  <tr key={drug.Id}>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      {drug.Id}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      {drug.Generic}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      {drug.Trade}
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      <button className="btn btn-info btn-sm mb-0">
                          <i className="fa fa-pencil"></i>
                      </button>
                    </td>
                    <td className="text-xs font-weight-bold mb-0 text-center">
                      <button className="btn btn-danger btn-sm mb-0"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={deleteDrugHandler} data-value={drug.Id}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          ) : (
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                <span class="alert-icon mx-2"><i class="fa fa-warning "></i></span>
                <span class="alert-text"><strong>Alert </strong> There is no Drug found !</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
          ) }
          
        </div>
      </div>
      {/* we need pagination here  */}
    </div>
  );
}

export default Drugs;
