import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const [loading, logout] = useLogout();

    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
    }

    return (
        <form onSubmit={handleLogout}>
            <button className="mt-auto">
                {
                    !loading ? (<CiLogout className="w-6 h-6 cursor-pointer"></CiLogout>) :
                        (
                            <span className="loading loading-spinner"></span>
                        )
                }
            </button>
        </form>
    )
}

export default LogoutButton;