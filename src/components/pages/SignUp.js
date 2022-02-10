import React,{ useState } from 'react';
import '../../App.css';

export default function SignUp() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
    setSubmitted(false);
  };

  const LogOut = () => {
    
    localStorage.clear();
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
   
    e.preventDefault();
    
    if (name === '' || email === '' || password === '') {
     
      setError(true);
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      localStorage.setItem("role", role);    
      setSubmitted(true);
      setError(false);
    }
  };
  
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
       
      </div>
    );
  };
  
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="login-box">
      <div className="login-form">
    <div className="form-group">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <div className="input-container">
        <label className="label">Name</label>
        <input class="form-control"  onChange={handleName} 
          value={name} type="text" />
        </div>
        <div className="input-container">
        <label className="label">Email</label>
        <input class="form-control"  onChange={handleEmail} 
          value={email} type="email" />
         </div>
         <div className="input-container">
        <label className="label">Password</label>
        <input class="form-control"  onChange={handlePassword}
          value={password} type="password" />
        </div>
        <div className="input-container">
          
        <select class="form-control"   id="inputGroupSelect01" onChange={handleRole} value={role}>
    
       <option value="Admin">Admin</option>
       <option value="Client">Client</option>
    
  </select>
  
  </div>
        <div class="input-container">
    <label for="exampleFormControlFile1">file upload</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>

        <div className="button-container">
          
        <button  class="btn btn-primary"  onClick={handleSubmit}  type="submit">
          Submit
        </button>
        {submitted == true ? <button  class="btn btn-danger"  onClick={LogOut}  type="button">
          Logout
        </button>:""}
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
