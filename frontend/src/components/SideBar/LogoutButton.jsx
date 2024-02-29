import React from "react";
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
    return (
        <>
        <div className="mt-auto">
            <CiLogout className="w-6 h-6 cursor-pointer"></CiLogout>
        </div>
        </>
    )
}

export default LogoutButton;