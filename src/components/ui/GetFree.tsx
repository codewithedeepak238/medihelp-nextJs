import { ClipboardPlus } from 'lucide-react'
import React from 'react'

export default function GetFree() {
    return (
        <button className="flex items-center mx-2 leading-none text-xs font-semibold bg-red-500 gap-1 px-2 md:px-4 py-2 cursor-pointer text-white  rounded-md hover:bg-red-700 duration-300">
            Get Free Consults
            <ClipboardPlus size={20} />
        </button>
    )
}
