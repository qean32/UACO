'use client'

import { useEffect } from "react"
import { useBoolean } from "./use-boolean"

export const useMountEvent = (callBack: () => void, dependencies: any[]) => {
    const [mount, _, on] = useBoolean(false)

    useEffect(() => {
        if (mount) { callBack() }
        if (!mount) { on() }
    }, dependencies)
}
