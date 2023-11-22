import { ChildrenJSX } from "../@types/types"

export const FlexContainer = ({children}: ChildrenJSX) => {
    return <main className="w-screen h-screen flex justify-center items-center">{children}</main>
}