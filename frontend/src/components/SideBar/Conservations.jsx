import React from "react";
import Conservation from "./Conservation";

const Conservations = () => {
    return (
        <div className="py-2 flex flex-col overflow-auto">
                <Conservation></Conservation>
                <Conservation></Conservation>
                <Conservation></Conservation>
                <Conservation></Conservation>
        </div>
    );
}

export default Conservations;