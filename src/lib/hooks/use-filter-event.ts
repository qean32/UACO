'use client'

import { useRouter } from "next/navigation"


export const useFilterEvent = <T,>() => {
    const router = useRouter()


    const push = async (data: T) => {
        router.push(
            // @ts-ignore
            `/${Object.entries(data).reduce((prev, curr) => { return prev + `${curr[0]}=${curr[1]}&` }, "?")}`,
            { scroll: true }
        )
    }

    const clear = () => { router.push("/", { scroll: true }) }

    return { clear, push }
}
