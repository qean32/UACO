'use client'

import { usePathname, useRouter } from "next/navigation"


export const usePushQuery = <T,>() => {
    const router = useRouter()
    const pathname = usePathname();

    const push = async (data: T) => {
        router.push(
            // @ts-ignore
            `${Object.entries(data).reduce((prev, curr) => { return prev + `${curr[0]}=${curr[1]}&` }, "?")}`,
        )
    }

    const clear = () => { router.push(pathname, { scroll: true }) }

    return { clear, push }
}
