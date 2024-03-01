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
        <form onSubmit={handleLogout} className="mt-auto">
            <button>
                {
                    !loading ? (<CiLogout className="w-7 h-7 font-bold cursor-pointer"></CiLogout>) :
                        (
                            <span className="loading loading-spinner"></span>
                        )
                }
            </button>
        </form>
    )
}

export default LogoutButton;