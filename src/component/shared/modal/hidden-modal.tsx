import { Button } from "@/component/ui";
import { useBoolean } from "@/lib/hooks";
import { ReactNode } from "react";

export const HiddenModal: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
    const [view, swap] = useBoolean(false)

    return <>
        <Button>

        </Button>
        {view && <>{children}</>}
    </>
}
