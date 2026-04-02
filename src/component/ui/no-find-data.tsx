import { Color } from "@/config"
import { Search } from "lucide-react"

export const NoFindData: React.FC<{}> = () => {
    return <div className="flex items-center justify-center gap-5 flex-col pb-10">
        <Search size={'70'} stroke={Color.primary} /><p className="primary-color text-xl font-semibold">Кажется, здесь ничего нет</p></div>
}
