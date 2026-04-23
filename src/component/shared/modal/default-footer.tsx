import { DialogFooter } from "@/component/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

export const DefaultFooter: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
    return <DialogFooter className="pt-8">
        <DialogClose asChild className="flex gap-2">
            <div>{children}</div>
        </DialogClose>
    </DialogFooter>
}
