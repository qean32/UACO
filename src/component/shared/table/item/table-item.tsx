import { cn } from '@/lib/helpers'
import { CSSProperties, ReactNode } from 'react'

interface Props {
    even: boolean
    children: ReactNode
}


export const TableItem: React.FC<Props> = ({ even, children }: Props) => {
    return (
        <tr className={cn(
            "transition-all duration-75 hover:bg-gray-100 hover-h h-[50px]",
            (!even ? 'bg-gray-200' : 'bg-gray-50'))}
        >
            {children}
        </tr>
    )
}
