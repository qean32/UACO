'use client'

import { useCallback, useState } from "react"

type voidFn = () => void
export const useBoolean = (initialState: boolean): [boolean, voidFn, voidFn, voidFn] => {
    const [boolean, setBoolean] = useState<boolean>(initialState)

    const swap = useCallback(() => setBoolean(prev => !prev), [])
    const on = useCallback(() => setBoolean(true), [])
    const off = useCallback(() => setBoolean(false), [])

    return [boolean, swap, on, off]
}
