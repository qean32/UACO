export const DangerText: React.FC<{ children: string }> = ({ children }: { children: string }) => {
    return <p className="text-red-700 font-medium w-full px-1">{children}</p>
}
