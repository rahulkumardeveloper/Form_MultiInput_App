// Example of react form
import React, { useState } from "react";


const App = () => {

  const [FullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    dob:""
  });//hooks 

  const Inchange = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;// find fname and lname when click ok


    setFullName((preValue) => {
      console.log(preValue);
      // now using spread opreator
      return {
        ...preValue,
        [name]: value
      }
     
     

    });
  };
  const SubmitClick = (event) => {
    event.preventDefault();//its using for form tag stop refresh page after click submit
    alert("for Submtted")
  }

  return (
    <><h1>Form For Multiple input box</h1>
      <div>
        <form onSubmit={SubmitClick}>
          <h1>Hello {FullName.fname} {FullName.lname}</h1>
          <p>{FullName.email}</p>
          <p>{FullName.mobile}</p>
          <p>{FullName.dob}</p>
          <input type="text" placeholder="Enter First name" id="input" onChange={Inchange}
            name="fname"
            value={FullName.fname}
          />
          <br />
          <input type="text" placeholder="Enter Last name" id="input" onChange={Inchange}
            name="lname"
            value={FullName.lname}
          />
          <br />
          <input type="email" placeholder="Enter emailid name" id="input" onChange={Inchange}
            name="email"
            value={FullName.email}
          />
          <br />
          <input type="number" placeholder="Enter Mobile number" id="input" onChange={Inchange}
            name="mobile"
            value={FullName.mobile}
          />
          <br />
          <input type="date" placeholder="Enter date of birth" id="input" onChange={Inchange}
            name="dob"
            value={FullName.dob}
          />
          <br />
    
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App;