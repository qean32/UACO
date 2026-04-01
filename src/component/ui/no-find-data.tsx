import { FolderSearch2 } from "lucide-react"

export const NoFindData: React.FC<{}> = () => {
    return <div className="flex items-center justify-center gap-5 flex-col pb-10">
        <FolderSearch2 size={'70'} fill="#208800" stroke="white" /><p className="primary-color font-semibold text-2xl">Кажется, здесь ничего нет</p></div>
}
