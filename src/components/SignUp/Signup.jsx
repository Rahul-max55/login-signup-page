import React from "react";
import "./Signup.css"
import { useState } from "react";

const Signup = (props) => {


    const handleChange = (event) => {
        const { name, value } = event.target;

        setChange((val) => ({
            ...val,
            [name]: value,
        })
        )
    }
    const [change, setChange] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        props.setShowAlertSign("true");
        if (change.name.length >= 2) {
            if (change.email.length >= 6 && /\S+@\S+\.\S+/.test(change.email)) {
                if (change.password.length >= 8) {
                    if (change.password === change.cpassword) {
                        props.alertFunction("SignUp is successful ", "Success! :", "green");
                    }
                    else {
                        props.alertFunction("Password and Confirm Password do not match", "Failed! :", "red");
                    }
                }
                else {
                    props.alertFunction("Entered password is less than 8 characters", "Failed! :", "red");
                }
            }
            else {
                props.alertFunction("Enter the currect Email", "Failed! :", "red");
            }
        }
        else {
            props.alertFunction("Enter the currect usename", "Failed! :", "red");
        }

    }

   





    return (
        <>
          

            
                                <div className="right_form">
                        <div className="heading">
                            <h2>Welcome to SignUp Form</h2>
                        </div>

                        <div className="all_form">
                            <form onSubmit={handleSubmit}>

                                {/* onClick={() => { props.getAlertValue(alertMsg, showAlertSign) }} */}

                                <input className="input_field input1" value={change.name} id="name" name="name" onChange={handleChange} type="text" required />
                                <label htmlFor="name" className="lname" >name
                                </label>
                                <input className="input_field" type="text" value={change.email} name="email" onChange={handleChange} id="Email" required />
                                <label htmlFor="Email" className="lemail">Email
                                </label>
                                <input className="input_field" onChange={handleChange} value={change.password} name="password" type="text" id="Password" required />
                                <label htmlFor="Password" className="lpassword" min="8" >Password
                                </label>
                                <input className="input_field" onChange={handleChange} value={change.cpassword} name="cpassword" type="text" id="CPassword" required />
                                <label htmlFor="CPassword" className="lcpassword">C Password
                                </label>
                                <button className="submit" type="Submit">SignUp </button>
                        <button onClick={() => { return props.Switch_SignUp() }} className="reset submit " type="Reset" >  Login </button >
                            </form>
                        </div>
                        <div className="other" >
                          
                        </div>
                    </div>


        </>
    )
}

export default Signup; 