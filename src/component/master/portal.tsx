import { ReactNode } from "react"
import { createPortal } from "react-dom"

interface Props {
    children: ReactNode,
    endpoint?: any
}

export const Portal: React.FC<Props> = ({ children, endpoint = document.body }: Props) => {
    return createPortal(children, endpoint)
}
