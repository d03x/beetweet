import { Globe, Mention, UserAddIcon, VerifiedIcon } from "@/components/icon";
import Popover from "@/components/UI/Popover";
import { cn } from "@/lib/utils";
import { ComposerContextProviderType, useComposer } from "./contexts/ComposerContextProvider";
import { trans } from "./utils/translate";
import { Check } from "@/components/icon/Check";

function BuildListItem({
    setVisibility,
    ctx,
    icon : Icon,
    visibility
}: {
    icon  : React.ComponentType<React.SVGProps<SVGSVGElement>>,
    setVisibility: (visibility: ComposerContextProviderType['visibility']) => void,
    ctx: ReturnType<typeof useComposer>,
    visibility: ComposerContextProviderType['visibility']
}) {
    return <li onClick={() => setVisibility(visibility)} className={cn('flex items-center px-2 text-xs font-bold hover:text-button-primary-text space-x-3 py-1.5 cursor-pointer',
        ctx.visibility === visibility ? 'focus-within:bg-button-primary-pressed text-button-primary-text bg-button-primary-background' : '')}>
        <Icon width={22} height={22} />
        <span>{trans(visibility)}</span>
        {ctx.visibility === visibility && (
           <div className="ml-auto">
             <Check />
           </div>
        )}
    </li>

}
export const SelectVisibility = () => {
    const ctx = useComposer()
    function setVisibility(visibility: ComposerContextProviderType['visibility']) {
        // Here you would typically update the visibility state in your context or state management solution
        ctx.setVisibility(visibility);

    }

    return (
        <Popover>
            <Popover.Trigger>
                <div className="px-3 py-1.5 hover:bg-button-disabled-background hover:text-button-disabled-text rounded-md flex items-center space-x-1 cursor-pointer bg-button-primary-deemphasized-pressed text-button-disabled-text text-xs font-semibold">
                    <Globe width={21} height={21} />
                    <span>{trans(ctx.visibility)}</span>
                </div>
            </Popover.Trigger>
            <Popover.Body>
                <div className="max-w-xs">
                    <div className="p-3">
                        <p className="font-bold text-sm">Who can reply?</p>
                        <p className="text-xs">Choose who can reply to this post. Anyone mentioned can always reply.
                        </p>
                    </div>
                    <div>
                        <ul>
                            <BuildListItem
                            icon={Globe}
                                ctx={ctx}
                                setVisibility={setVisibility}
                                visibility={'everyone'}
                            />
                            <BuildListItem
                            icon={UserAddIcon}
                                ctx={ctx}
                                setVisibility={setVisibility}
                                visibility={'followers'}
                            />
                            <BuildListItem
                            icon={VerifiedIcon}
                                ctx={ctx}
                                setVisibility={setVisibility}
                                visibility={'verified'}
                            />

                            <BuildListItem
                            icon={Mention}
                                ctx={ctx}
                                setVisibility={setVisibility}
                                visibility={'mentioned'}
                            />

                        </ul>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );
}