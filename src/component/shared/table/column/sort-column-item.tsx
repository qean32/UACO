import { sortingDirectionEnum } from "@/@types"
import { BookmarkCheck } from "lucide-react"
import { ReactNode } from "react"

interface Props {
    sort: string
    isCurrent: boolean
    direction: boolean
    children: ReactNode
    push: (params: any) => void
}

export const SortColumnItem: React.FC<Props> = ({ children, isCurrent, sort, push, direction }: Props) => {
    return (
        <th className='w-1/12  cursor-pointer' onClick={() => push({
            sort, direction: !direction ? sortingDirectionEnum.desc : sortingDirectionEnum.asc
        })}
        >
            <div className="flex items-center gap-1 justify-center">
                {isCurrent && <BookmarkCheck />}
                {children}
            </div>
        </th>
    )
}
