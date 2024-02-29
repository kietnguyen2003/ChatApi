const Login = () => {
    return <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Login
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            {/* fullName, userName, password, confirmPassword, gender */}
            {/*   action="/api/auth/signup" method="POST" */}
            <form >
                <div>
                    <input type="text" name="userName" placeholder="Username" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" className="input w-full max-w-xs m-1" />
                </div>
                <div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" defaultChecked className="checkbox" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-block m-1">Logn in</button>
            </form>
        </div>
    </div>
};

export default Login;