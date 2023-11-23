import { ChildrenJSX } from "../@types/types"

export const FormContainer = ({children}: ChildrenJSX) => {
    return <div className="w-2/6 p-8 bg-white flex flex-col justify-center">{children}</div>
}