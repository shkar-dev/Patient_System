import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function Details() {
    var {id} = useParams();
    const [drugs , setDrugs]= useState([]);
    const [patientDetails ,setPatieintDetails ] = useState([]);
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
        axios.post("http://localhost:85/patient_system/project/patient_system_backend/FetchPatientDetails.php",Id).then((res)=>{
            console.log(res.data);
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
      setSelectedDrug(value);
    }
    // const drugClickHandler = (event)=>{
     
    //   var drugsc = selectedDrug.filter(function(value , index , arr) {
    //     return value.Id !== event.currentTarget.getAttribute('data-value');
    //   })
    //   setSelectedDrug(drugsc)
    // }
    const drugSubmitHandler = ()=>{ 
      // console.log(selectedDrug)
    }

    const mealHandler =(event)=>{
     var mealId = event.currentTarget.getAttribute('id');
      // ! jyakrdnawai id aka 
      var did = mealId.slice(4);
      // ! babakar henani filter garan basar selected grug da ta aw id a adozinawa 
      var drug = selectedDrug.filter(function(value , index , arr ){
        if(value.Id == did ){
          value.Meal = event.target.value;
        }
        return value;
      })
      // ! zyakrdni meal bo aw object  a
     
      // ! zyadkrdnawai bo selected drug 
        setSelectedDrug(drug)
        console.log(selectedDrug)
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='History' rows="3" onChange={historyHistoryHandler}></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Plan</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Plan' rows="3" onChange={historyPlanHandler}></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Diagnoses</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Diagnoses' rows="3" onChange={historyDiagnoseHandler}></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Allergy</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Allergy' rows="3" onChange={historyAllergyHandler}></textarea>
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
                       
                    </tr>
                </thead>
                <tbody style={{textAlign : 'center'}}>
                  {selectedDrug.map((drug)=>(
                    <tr>
                      <td>{drug.Id}</td>
                      <td>{drug.Generic}</td>
                      <td>{drug.Trade}</td>
                      <td>
                        <input type="text"  className={'form-control'} placeholder="Meal"  id={'meal'+drug.Id} onBlur={mealHandler} />
                      </td>
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
                          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Report' rows="3" onChange={reportHandler}></textarea>
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





// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// export default function CheckboxesTags() {
//   return (
//     <Autocomplete
//       multiple
//       id="checkboxes-tags-demo"
//       options={top100Films}
//       disableCloseOnSelect
//       getOptionLabel={(option) => option.title}
//       renderOption={(props, option, { selected }) => (
//         <li {...props}>
//           <Checkbox
//             icon={icon}
//             checkedIcon={checkedIcon}
//             style={{ marginRight: 8 }}
//             checked={selected}
//           />
//           {option.title}
//         </li>
//       )}
//       style={{ width: 500 }}
//       renderInput={(params) => (
//         <TextField {...params} label="Checkboxes" placeholder="Favorites" />
//       )}
//     />
//   );
// }

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
 