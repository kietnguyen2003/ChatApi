import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignin = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();

    const signin = async ({ userName, password }) => {
        const success = handleInputError(userName, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            })
            const data = await res.json();
            if (res.status === 404) {
                toast.error(data.message);
                return;
            }
            toast.success(data.message);
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
    return [loading, signin];
}
export default useSignin


const handleInputError = (userName, password) => {
    if (!userName) {
        toast.error("Please enter a username");
        return false;
    }

    if (!password) {
        toast.error("Please enter a password");
        return false;
    }

    return true;
}