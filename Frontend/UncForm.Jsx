import React, { useRef } from 'react';

const UncForm = () => {
  // Refs for the form fields
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // Function to show the form values
  const showName = () => {
    alert(nameRef.current.value);
    alert(emailRef.current.value);
    alert(passwordRef.current.value);
    alert(confirmPasswordRef.current.value);

    // Clear the form values after submitting
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";

    // Logging refs for debugging purposes
    console.log(nameRef);
    console.log(emailRef);
    console.log(passwordRef);
    console.log(confirmPasswordRef);
  };

  return (
    <div>
      {/* Name Input Section */}
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="Enter Your Name" ref={nameRef} />
        <button onClick={showName} className="border-2">
          Show Name
        </button>
      </div>

      {/* Login Form Section */}
      <div className="form-container">
        <div className="login-box">
        <h2>Login</h2>
        
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          ref={emailRef}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
        />

        <button type="button" onClick={showName} className="border-2">
          Submit
        </button>
      </div>
    </div>
    </div>
  );
};

export default UncForm;


