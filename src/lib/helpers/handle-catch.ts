import { toastConfig } from "@/config"
import { toast } from "sonner"

export const handleCatch = (res: any) => {
    toast("Ошибка со стороны сервера!", {
        ...toastConfig,
        description: "Похоже произошла ошибка!"
    })
}
