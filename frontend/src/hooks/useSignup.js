import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputError(fullName, userName, password, confirmPassword, gender);
        if (!success) return;
        setLoading(true);
        try {
            console.log({ fullName, userName, password, confirmPassword, gender })
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            })
            const data = await res.json();
            if (res.status === 404) {
                toast.error(data.message);
                return;
            }

            //localStorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            //context
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

const handleInputError = (fullName, userName, password, confirmPassword, gender) => {
    if (!fullName) {
        toast.error("Please enter your full name");
        return false;
    }

    if (!userName) {
        toast.error("Please enter a username");
        return false;
    }

    if (!password) {
        toast.error("Please enter a password");
        return false;
    }

    if (!confirmPassword) {
        toast.error("Please confirm your password");
        return false;
    }

    if (!gender) {
        toast.error("Please select your gender");
        return false;
    }

    if (password !== confirmPassword) {
        console.log(!fullName)
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password should be at least 6 characters long");
        return false;
    }

    return true;
}

export default useSignup