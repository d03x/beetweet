import { ComponentType, ReactNode, SVGProps } from "react"

export const Btn = ({icon : Icon,onPres}: {
    onPres?:()=>void,
    icon: ComponentType<SVGProps<SVGSVGElement>>
}) => {
    return <button onClick={onPres} className=" flex cursor-pointer text-button-primary-background hover:text-button-primary-deemphasized-text transition-all p-1">
        <Icon width={20} height={20} />
    </button>

}