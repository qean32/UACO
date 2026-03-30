import { FolderSearch } from "lucide-react"

export const NoFindData: React.FC<{}> = () => {
    return <div className="flex items-center justify-center gap-5 flex-col pb-10">
        <FolderSearch size={'70'} stroke="#208800" /><p className="primary-color font-semibold text-2xl">Кажется, здесь ничего нет</p></div>
}
