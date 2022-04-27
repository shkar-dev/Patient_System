import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function Details() {
    var {id} = useParams();
    const [drugs , setDrugs]= useState([]);
    const [patientDetails ,setPatientDetails ] = useState([ ]);
    const [fetchedHistory ,setFetchedHistory]=useState([]);
    const [fetchedReport ,setFetchedReport] = useState([]);
    const [history ,setHistory] = useState({
        Plan : '',
        Allergy : '',
        Diagnose : '',
        History : '',
        Id : id
    });
    const [report, setReport] = useState({
        Id : id,
        Description : ''
    });
    const Id = {
        Id : id
    }
    
     
    useEffect(()=>{ 
      axios.post("http://localhost:85/patient_system/project/patient_system_backend/FetchPatientById.php",Id).then((res)=>{
        setPatientDetails(res.data);
      })
    },[])
    useEffect(()=>{
      axios.post("http://localhost:85/patient_system/project/patient_system_backend/FetchedHistoryById.php",Id).then((res)=>{
        setHistory({
          Plan : res.data.Plan,
          Allergy : res.data.Allergy,
          Diagnose  : res.data.Diagnoses,
          History : res.data.History,
          Id:id
        })
      
      })
    },[])
    
    useEffect(()=>{
      axios.post("http://localhost:85/patient_system/project/patient_system_backend/FetchReportById.php",Id).then((res)=>{
        setFetchedReport(res.data);
        setReport({
          Id : id , 
          Description : res.data.Description
        })
      })
    },[])
    
     
    const historyHistoryHandler = (e)=>{
        setHistory((prev)=>{
            return {...prev , History : e.target.value}
        });
    }
    const historyPlanHandler = (e)=>{
        setHistory((prev)=>{
            return {...prev , Plan : e.target.value}
        });
    }
    const historyAllergyHandler = (e)=>{
        setHistory((prev)=>{
            return {...prev , Allergy : e.target.value}
        });
    }
    const historyDiagnoseHandler = (e)=>{
        setHistory((prev)=>{
            return {...prev , Diagnose : e.target.value}
        });
    }
    const historySubmitHandler =(event)=> {
        event.preventDefault();
        console.log(history)
        axios.post("http://localhost:85/patient_system/project/patient_system_backend/InsertHistory.php",history).then((res)=>{
            if(res.data){ 
               notifySuccess("Information Successfully Inserted ")
            }else{
                notifyError("There is an error !! ");
            }
        })
    }
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

    //   report 
    const reportHandler =(event)=>{
        setReport((prev) =>{
            return {...prev , Description : event.target.value}
        })
    }

    const reportSubmitHandler =(event)=>{
        event.preventDefault();
        console.log(report)
        axios.post("http://localhost:85/patient_system/project/patient_system_backend/InsertReport.php" , report).then((res)=>{
            if(res.data){
                notifySuccess("Information Successfully Inserted ")
             }else{
                 notifyError("There is an error !! ");
             }
        })
    }
    useEffect(()=>{
      axios.get("http://localhost:85/patient_system/project/patient_system_backend/FetchDrugs.php").then((res)=>{
        setDrugs(res.data);
      }) 
    },[])
    const [selectedDrug, setSelectedDrug] =useState([ ]);
    // const [selecteDrugMeal , setSelectedDrugMeal] = useState([]);
    const multipleDrugSelectionHandler= (event , value)=>{
      var today = new Date();
      var date  = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var increment = 0;
      while(increment < value.length){
        value[increment].Date = date;
        value[increment].PatientId = id;
        increment++;
      }
      setSelectedDrug(value);  
    }
    const drugSubmitHandler = (event)=>{
      event.preventDefault(); 
      axios.post("http://localhost:85/patient_system/project/patient_system_backend/NewTreatment.php",selectedDrug).then((res)=>{
        console.log(res.data);
      });
    }
    const mealHandler =(event)=>{
     var mealId = event.currentTarget.getAttribute('id');
     var did = mealId.slice(4);
     var drug = selectedDrug.filter(function(value , index , arr ){
        if(value.Id == did ){
          value.Meal = event.target.value;
        }
        return value;
      })
      setSelectedDrug(drug)
    }
    
      
  return (
    <>
    <div className="formContainer">
        {/* visits */}
      <div className="card ">
        <div className="card-header bg-white border-bottom  ">
          <h3>Visits {id} </h3>
        </div>
        <div className="card-body">
          {/* {Patients.length != 0  ?  ( */}
            <div className="table-responsive">
             <table className="table align-items-center mb-0">
               <thead>
                 <tr>
                   <th className="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">
                     #
                   </th>
                   <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                     Code
                   </th>
                   <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                     Fullname
                   </th>
                   <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                     phone number
                   </th>
                   <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                     Details
                   </th>
                 </tr>
               </thead>
               <tbody>
                 {/* {Patients.map((a) => (
                   <tr key={a.Id}>
                     <td className="text-xs font-weight-bold mb-0 text-center">
                       {increment++}
                     </td>
                     <td className="text-xs font-weight-bold mb-0 text-center">
                      {a.Id}
                     </td>
                     <td className="text-xs font-weight-bold mb-0 text-center">
                       {a.FirstName +" "+a.LastName}
                     </td>
                     <td className="text-xs font-weight-bold mb-0 text-center">
                       {a.PhoneNumber}
                     </td>
                     <td className="text-xs font-weight-bold mb-0 text-center">
                       <button className="btn btn-info btn-sm m-0"><i className="fa fa-file"></i></button>
                     </td>
                   </tr>
                 ))} */}
               </tbody>
             </table>
           </div>
        {/* //   ) : (
        //     <div class="alert alert-secondary alert-dismissible fade show" role="alert">
        //         <span class="alert-icon mx-2"><i class="fa fa-warning "></i></span>
        //         <span class="alert-text"><strong>Alert </strong> There is no patient found !</span>
        //         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //         </button>
        //     </div>
        //   ) } */}
        </div>
      </div>
      {/* history */}
      <div className="card my-5">
          <div className="card-header">
            <h3>History</h3>
          </div>
          <div className="card-body">
            <form onSubmit={historySubmitHandler}>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">History</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='History' rows="3" onChange={historyHistoryHandler} value={history.History}  ></textarea>
                </div>
                 <div class="form-group">
                    <label for="exampleFormControlTextarea1">Plan</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Plan' rows="3" onChange={historyPlanHandler} value={history.Plan}></textarea>
                </div>
              <div class="form-group">
                    <label for="exampleFormControlTextarea1">Diagnoses</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Diagnoses' rows="3" onChange={historyDiagnoseHandler} value={history.Diagnose }></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Allergy</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Allergy' rows="3" onChange={historyAllergyHandler} value={history.Allergy}></textarea>
                </div>
                <div className="card-footer">
                    <button  className='btn btn-dark'>Save <i className='fa fa-check mx-2' ></i></button>
                </div> 
            </form>
        </div>
      </div>
      {/* treatment */}
      <div className="card my-5">
          <div className="card-header">
              <h3>Treatment</h3>
          </div>
          <form onSubmit={drugSubmitHandler} >
            <div className="card-body">
              <div className="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <Autocomplete 
                      onChange={multipleDrugSelectionHandler}
                      multiple
                      id="combo-box-demo" 
                      options={drugs}
                      getOptionLabel={(options) => options.Generic}
                      renderInput={(params)=>(
                        <TextField {...params} label="combo box" value={params.Id}  variant='outlined'/>
                      )}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-12">
                  <textarea id="Note" cols="30" rows="10" className='form-control' placeholder='Note ... ' onBlur={noteHandler}></textarea>
                </div>
              </div> */}
            </div>
            <div className="card-footer">
              <button class="btn btn-dark mx-2"  >Save <i class="fa fa-check mx-2"></i> </button>
            </div>
          </form>
          {selectedDrug !== null ? (
            <div className="card-body">
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
                          Meal
                      </th>
                      <th className="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">Date</th>
                    </tr>
                </thead>
                <tbody style={{textAlign : 'center'}}>
                  {selectedDrug.map((drug)=>(
                    <tr key={drug.Id}>
                      <td>{drug.Id}</td>
                      <td>{drug.Generic}</td>
                      <td>{drug.Trade}</td>
                      <td>
                        <input type="text"  className={'form-control'} placeholder="Meal"  id={'meal'+drug.Id} onChange={mealHandler} />
                      </td>
                      <td>{drug.Date}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
            </div>   
          </div>
          ) : ''}
      </div>
      {/* report  */}
       <div className="card">
           <div className="card-header">
               <h3>Report</h3>
           </div>
           <form onSubmit={reportSubmitHandler}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12W">
                      <div class="form-group">
                          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Report' rows="3" onChange={reportHandler} value={report.Description}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className='btn btn-dark '>Save<i className='fa fa-check mx-2'></i></button>
                </div>
           </form>
       </div>
    </div>
    </>
  )
}

export default Details
 