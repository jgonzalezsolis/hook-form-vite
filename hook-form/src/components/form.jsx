import React, { useState } from  'react';
    
const Form = (props) => { 
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }
    const handleEmail  = (e) => {
        setEmail (e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if((e.target.value !== password)) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            // an empty string is considered a "falsy" value
            setConfirmPasswordError("");
        }
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password ,confirmPassword};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted( true );
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form!";
	// } else {
    //         return "Welcome! Please submit the form";
	// }
    // };

    return(
        <div>
            <form onSubmit={ createUser }>
                {/* <h3> {formMessage()}</h3> */}
                {
                    hasBeenSubmitted?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                    <label>First name: </label> 
                    <input type="text" name="firstName" value={firstName} onChange={handleFirstName } />
                    {
                        firstNameError ?
                        <p> {firstNameError}</p>:
                        ""
                    }
                </div>
                {/* {firstName.length < 2  ? (
                <p>First Name must be at least 2 characters</p>
                ) : null} 
                {firstName.length < 1  ? (
                <p>First Name is required</p>
                ) : null}  */}
                <div>
                    <label>Last name: </label> 
                    <input type="text" name="lastName" value={lastName} onChange={ handleLastName} />
                    {
                        lastNameError ?
                        <p> {lastNameError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" value={email} onChange={handleEmail} />
                    {
                        emailError ?
                        <p> {emailError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={password} onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p> {passwordError}</p>:
                        ""
                    }
                </div>
                <div>
                    <label> confirm Password: </label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p> {confirmPasswordError}</p>:
                        ""
                    }
                </div>
                {
                    (!firstName || !lastName || !email || !password || !confirmPassword || 
                    firstNameError || lastNameError || emailError || passwordError || confirmPasswordError) ?
                    <input type="submit" value="Create User" disabled />:
                    <input type="submit" value="Create User" />
                }
                
            </form>
            <div>
                <h3 >Your Form Data</h3>
                <p>
                <label>First Name: </label>{ firstName }
                </p>
                <p>
                <label>Last Name: </label>{ lastName }
                </p>
                <p>
                <label>Email: </label>{ email }
                </p>
                <p>
                <label>Password: </label>{ password }
                </p>
                <p>
                <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </div>
    );
};
    
export default Form;
