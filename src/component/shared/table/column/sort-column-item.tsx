import { BookmarkCheck } from "lucide-react"
import { ReactNode } from "react"

interface Props {
    sort?: boolean
    nameSort: string
    children: ReactNode
    push: any
}

export const SortColumnItem: React.FC<Props> = ({ children, nameSort, sort, push }: Props) => {
    return (
        <th className='w-1/12  cursor-pointer' onClick={() => { push({ [nameSort]: true }) }}>
            <div className="flex items-center gap-1 justify-center">
                {sort && <BookmarkCheck />}
                {children}
            </div>
        </th>
    )
}
