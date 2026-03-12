'use client'

import { signOut } from "next-auth/react"
import { Button } from "@/component/ui"

export const SignOut: React.FC<{}> = () => {
    return <Button onClick={() => { signOut({ redirect: true, callbackUrl: "/auth" }) }} variant={'primary'}>Выход</Button>
}