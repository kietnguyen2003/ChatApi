import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form action="" className="flex">
            <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
            <button className="btn btn-circle text-white">
                <IoSearch className="w-5 h-5"/>
            </button>        
            </form>
    );
}

export default SearchInput;