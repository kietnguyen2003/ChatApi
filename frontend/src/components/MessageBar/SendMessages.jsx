import { IoSend } from "react-icons/io5";


const SendMessages = () => {
    return (
        <form className="px-4 my-3">
            <>
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder="" className="border text-sm rounded-lg block w-full p-2.5
                    bg-gray-700 border-gray-600 text-white"
                    />
                    <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <IoSend></IoSend>
                    </button>
                </div>
            </>
        </form>
    )
}

export default SendMessages