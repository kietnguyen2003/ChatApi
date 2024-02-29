const SignUp = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                SignUp
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            {/* fullName, userName, password, confirmPassword, gender */}
            {/*   action="/api/auth/signup" method="POST" */}
            <form >
                <div>
                    <input type="text" name="fullName" placeholder="FullName" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <input type="text" name="userName" placeholder="Username" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder="ConfirmPassword" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <select name="gender" className="select w-full max-w-xs m-1">
                        <option disabled selected>Other</option>
                        <option name="male">male</option>
                        <option name="female">female</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-block m-1">Sign Up</button>
            </form>
        </div>
    </div>
};

export default SignUp;