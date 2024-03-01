import { Link } from "react-router-dom";
import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInput] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        {
            !loading ? (
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-300">
                        SignUp
                        <span className="text-blue-500"> ChatApp</span>
                    </h1>
                    {/* fullName, userName, password, confirmPassword, gender */}
                    {/*   action="/api/auth/signup" method="POST" */}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" value={inputs.fullName}
                                onChange={(e) => setInput({ ...inputs, fullName: e.target.value })}
                                placeholder="FullName" className="input w-full max-w-xs m-1" />
                        </div>
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
                            <input type="password" value={inputs.confirmPassword}
                                onChange={(e) => setInput({ ...inputs, confirmPassword: e.target.value })}
                                placeholder="ConfirmPassword" className="input w-full max-w-xs m-1" />
                        </div>
                        <div>
                            <select value={inputs.gender}
                                className="select w-full max-w-xs m-1"
                                onChange={(e) => setInput({ ...inputs, gender: e.target.value })}>
                                <option disabled value="">Gender</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <Link to="/login" className="link link-hover ml-2">Already have an account</Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-block m-1">Sign Up</button>
                    </form>
                </div>
            ) :
                (
                    <span className="loading loading-spinner"></span>
            )
        }
    </div >
};

export default SignUp;