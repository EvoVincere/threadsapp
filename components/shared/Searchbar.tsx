"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Input } from "../ui/input";

interface Props {
    routerType: string;
}

const Searchbar = ({ routerType }: Props) => {
    const router = useRouter()
    const [search, setSearch] = useState("")

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search) {
                router.push(`/${routerType}?z=` + search)
            } else {
                router.push(`/${routerType}`)
            }
        },300)
        return () => clearTimeout(delayDebounceFn)
    }, [search, routerType])
  return (
    <div className="searchbar">
        <Image 
            src="/assets/search-gray.svg"
            alt="search"
            width={24}
            height={24}
            className="object-contain"
        />
        <Input 
            id="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`${routerType !== "/search" ? 
                "Search communities" : "Search users"}`}
            className="no-focus searchbar_input"
        />
    </div>
  )
}

export default Searchbar