import React, { useState } from 'react';
import "./Login.css";


const Login = (props) => {

    const [inputvalue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        event.preventDefault();
        const { value, name } = event.target;
        setInputValue((val) =>
        ({
            ...val,
            [name]: value,
        }))
    }


    const handleLogin = (e) => {
        e.preventDefault();
        props.setShowAlertSign("true");
        if (inputvalue.email.length >= 6 && /\S+@\S+\.\S+/.test(inputvalue.email)) {
            if (inputvalue.password.length >= 8) {
                props.alertFunction("Login successful ", "Success! :", "green");
            }
            else {
                props.alertFunction("Entered password is wrong ", "Failed! :", "red");
            }
        }
        else {
            props.alertFunction("Entered email is wrong", "Failed! :", "red");
        }

    }



    return (
        <>
            <div className="right_form">
                <div className="heading">
                    <h2>Welcome to Login Form</h2>
                </div>

                <div className="input_Form">
                    <form onSubmit={handleLogin}>
                        <input className="input_field" type="text" value={inputvalue.email} name="email" onChange={handleChange} id="Email" required />
                        <label htmlFor="Email" className="lemail">Email
                        </label>
                        <input className="input_field" onChange={handleChange} value={inputvalue.password} name="password" type="text" id="Password" required />
                        <label htmlFor="Password" className="lpassword" min="8" >Password
                        </label>
                        <button className="submit" type="Submit">Login </button>
                        <button onClick={() => { return props.Switch_SignUp() }} className="reset submit " type="Reset" >SignUp</button >
                    </form>
                </div>
                <div className="other" >
                    Forget Your Password
                </div>



            </div>
        </>
    )
}

export default Login