'use client'

import { useEffect, useState } from "react"

export function useDebounceValue<T>(defaultValue: T, daley: number = 400) {
    const [debounsedValue, setDebousedValue] = useState<T>(defaultValue)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebousedValue(defaultValue)
        }, daley)

        return () => clearTimeout(timeOut)
    }, [defaultValue, daley])

    return debounsedValue
}
