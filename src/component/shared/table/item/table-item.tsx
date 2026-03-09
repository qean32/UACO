import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}


export const TableItem: React.FC<Props> = ({ children }: Props) => {
    return (
        <tr className="transition-all duration-75 hover:bg-gray-100 hover-h h-[50px]">
            {children}
        </tr>
    )
}
