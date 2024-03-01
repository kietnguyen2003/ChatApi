import { Link } from "react-router-dom";
import React, { useState } from "react";
import useSignin from "../../hooks/useSignin";

const Login = () => {

    const [inputs, setInput] = useState({
        userName: "",
        password: ""
    })

    const [loading, signin] = useSignin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signin(inputs)
    }

    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        {
            !loading ? (
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Login
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            {/* fullName, userName, password, confirmPassword, gender */}
            {/*   action="/api/auth/signup" method="POST" */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={inputs.userName}
                        placeholder="Username"
                        onChange={(e) => setInput({ ...inputs, userName: e.target.value })}
                        className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <input type="password" value={inputs.password}
                        onChange={(e) => setInput({ ...inputs, password: e.target.value })}
                        placeholder="Password" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <Link to="/signup" className="link link-hover ml-2">Don't have any account</Link>
                </div>
                <button type="submit" className="btn btn-block m-1">Logn in</button>
            </form>
        </div>
            ) : (
                <span className="loading loading-spinner"></span>
            )
        }
    </div>
};

export default Login;