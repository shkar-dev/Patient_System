import "./style/TodaysPatient.css";
import db from "../Firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";

function TodaysPatient() {
  const [patients, setPatient] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "Patients"), (snapshot) => {
        setPatient(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),
    []
  );
  let increment = 1;

  return (
    <div class="formContainer">
      <div class="card ">
        <div class="card-header bg-white border-bottom  ">
          <h2>Today's Patient List</h2>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7">
                    #
                  </th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Code
                  </th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Fullname
                  </th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    phone number
                  </th>
                  <th class="text-uppercase text-secondary text-xxs text-center font-weight-bolder opacity-7">
                    Visits
                  </th>
                </tr>
              </thead>
              <tbody>
                {patients.map((a) => (
                  <tr key={a.id}>
                    <td class="text-xs font-weight-bold mb-0 text-center">
                      {increment++}
                    </td>
                    <td class="text-xs font-weight-bold mb-0 text-center">
                     {a.id}
                    </td>
                    <td class="text-xs font-weight-bold mb-0 text-center">
                      {a.FirstName +" "+a.LastName}
                    </td>
                    <td class="text-xs font-weight-bold mb-0 text-center">
                      {a.PhoneNumber}
                    </td>
                    <td class="text-xs font-weight-bold mb-0 text-center">
                      <button class="btn btn-info btn-sm m-0"><i class="fa fa-calendar"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysPatient;
