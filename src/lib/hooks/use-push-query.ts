'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { objectToUrlSearch } from "../helpers";


export const usePushQuery = <T,>() => {
    const router = useRouter()
    const pathname = usePathname();
    const search = useSearchParams()

    const push = async (data: any, prev: boolean = true) => {
        router.push(`?${objectToUrlSearch(prev ? { ...Object.fromEntries(search), ...data } : data)}`, { scroll: false })
    }

    const clear = () => { router.push(pathname) }

    return { clear, push }
}
