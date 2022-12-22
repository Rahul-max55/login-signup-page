import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Alert from "./components/Alert/Alert";
import Sign from "./components/img/signUp.PNG";
import { Routes, Route} from "react-router-dom";


const App = () => {


    const [showAlertSign, setShowAlertSign] = useState("false");
    const [showLogin, setShowLogin] = useState();


    const [alertMsg, setAlertMsg] = useState({});

    const alertFunction = (message, value, color) => {
        setAlertMsg({
            msg: message,
            value: value,
            color: color,
        })
    }

    const Switch_SignUp = (e) => {
        showLogin === "true" ? setShowLogin("false") : setShowLogin("true");
    }

   


    return (

        <>
            <div className="container">
                <div className="alert_space">
                    {showAlertSign === "true" &&
                    <Alert msg={alertMsg.msg} color={alertMsg.color} value={alertMsg.value} />
                    }
                </div>
                <div className="cards">
                    <div className="image">
                        <img src={Sign} alt="Sign" />
                    </div>
                    {
                        <Routes>
                            {showLogin === "true"}?
                            <Route path="Login"
                                element={<Login setShowAlertSign={setShowAlertSign} alertFunction={alertFunction} Switch_SignUp={Switch_SignUp} />
                                } />
                            : <Route path="/"
                                element={<Signup setShowAlertSign={setShowAlertSign} alertFunction={alertFunction} Switch_SignUp={Switch_SignUp} />}
                            />
                        </Routes>
                    }
                </div>
            </div>
        </>
    )
}

export default App;