import { cn } from '@/lib/helpers'
import { CSSProperties, ReactNode } from 'react'

interface Props {
    even: boolean
    children: ReactNode
    style: CSSProperties
}


export const TableItem: React.FC<Props> = ({ even, children, style }: Props) => {
    return (
        <tr className={cn(
            "hover:outline-2 outline-green-700 transition-all duration-75 hover:bg-gray-50",
            ((even) ? 'bg-gray-200' : 'bg-gray-50'))}
            style={style}
        >
            {children}
        </tr>
    )
}
