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
            "",
            ((even) ? 'bg-gray-200' : 'bg-gray-100'))}
            style={style}
        >
            {children}
        </tr>
    )
}
