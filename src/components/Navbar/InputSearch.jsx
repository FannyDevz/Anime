"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import {useRef} from "react";
import {useRouter} from "next/navigation";


const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter()

    const handleSearch = (event) => {

        const key = searchRef.current.value
        if (!key || key.trim() === "") return
        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault();
            router.push(`/search/${key}`)
        }
    }

    return (
        <div className="relative w-full">
            <input placeholder="search" className="bg-color-dark w-full p-2 rounded text-color-primary" ref={searchRef}
                   onKeyDown={handleSearch}/>
            <button className="absolute top-2 end-2 " onClick={handleSearch} >
                <MagnifyingGlass color="#CCD6F6"  size={24} />
            </button>
        </div>
    )
}

export default InputSearch;