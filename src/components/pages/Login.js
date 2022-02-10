import React,{useState} from 'react';
import '../../App.css';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Username, setUsername] = useState('');

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);
    const userData = localStorage.getItem("name") ? localStorage.getItem("name"):'';
    const userPass = localStorage.getItem("password") ? localStorage.getItem("password"):'';

    // Compare user info
    if (userData == uname.value) {
      if (userPass !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setUsername(uname.value);
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" class="form-control" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" class="form-control" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input class="form-control" type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login-box">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted  ? <div>{Username} - {localStorage.getItem("role")} User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
 
export default Login;
