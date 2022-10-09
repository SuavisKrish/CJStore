import React, { useState } from 'react'
import axios from 'axios';

const Login = ({ token, setToken }) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    const loginHandler = () => {

        console.log("I have reached");
        axios.post('https://fakestoreapi.com/users', {

            data: {
                username: userName,
                password: password
            }
        })
            .then(

                (res) =>

                    console.log(res)
            )
        // fetch({
        //     url: "https://fakestoreapi.com/auth/login",
        //     method: "POST",
        //     data: {
        //         userName: userName,
        //         password: password
        //     }
        // }).then((res) => {
        //     console.log(res.data.token);
        //     setToken(res.data.token);
        //     localStorage.setItem("userToken", res.data.token)
        // }).catch((err) => {
        //     console.log(err.response);
        //     setError(err.response.data)
        // })
    }
    return (
        <div>
            <div>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='username' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password' />
                {/* {error && <small> {error}</small>} */}
                <button onClick={loginHandler}>Login</button>

            </div>
        </div>
    )
}

export default Login