import { Avatar } from "@/features/profile/Avatar"
import { CreatePostFormContent } from "./CreatePostForm"
import { Calendar, EmojiIconLine, Fire, Globe, HeartIconFilled, HeartIconOutline, Lists, Media, MediaGif, UserIconOutline, VerifiedIcon } from "@/components/icon"
import Popover from "@/components/UI/Popover"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useEffect, useState } from "react";
import { useCreatePostContext } from "../contexts/CreatePostContextProvider";
import { Btn } from "./Btn";
let maxWords = 350;
export const CreatePostCompose = () => {



    const ctx = useCreatePostContext()
    const [textPercentage, setTextPrecentage] = useState<number>(0)

    useEffect(() => {
        setTextPrecentage((ctx.content.length / maxWords) * 100)
    }, [ctx.content])

    return <div className="p-4">
        <div className="flex items-start  gap-x-2">
            <Avatar />
            <div className="flex   flex-col flex-1">
                <CreatePostFormContent />
                <div className="flex  border-t items-center mt-4  py-4 border-primary-outline">
                    <Popover>
                        <Popover.Trigger>
                            <div className="px-3 py-1.5 hover:bg-button-disabled-background hover:text-button-disabled-text rounded-full flex items-center space-x-1 cursor-pointer bg-button-primary-deemphasized-pressed text-button-disabled-text text-xs font-semibold">
                                <Globe width={21} height={21} />
                                <span>Anybody can interact</span>
                            </div>
                        </Popover.Trigger>
                        <Popover.Body>
                            <div>
                                <div className="p-3">
                                    <p className="font-bold text-sm">Who can reply?</p>
                                    <p className="text-xs">Choose who can reply to this post. Anyone mentioned can always reply.
                                    </p>
                                </div>
                                <div>
                                    <ul>
                                        <li className="flex items-center px-2 text-xs font-bold hover:text-button-primary-text space-x-3 py-1.5 cursor-pointer hover:bg-button-primary-pressed">
                                            <Globe width={25} height={25} />
                                            <span>Everyone</span>
                                        </li>
                                        <li className="flex items-center px-2 text-xs font-bold hover:text-button-primary-text space-x-3 py-1.5 cursor-pointer hover:bg-button-primary-pressed">
                                            <Globe width={25} height={25} />
                                            <span>Hanya followers aktif</span>
                                        </li>
                                        <li className="flex items-center px-2 text-xs font-bold hover:text-button-primary-text space-x-3 py-1.5 cursor-pointer hover:bg-button-primary-pressed">
                                            <Globe width={25} height={25} />
                                            <span>Verified Accounts</span>
                                        </li>
                                        <li className="flex items-center px-2 text-xs font-bold hover:text-button-primary-text space-x-3 py-1.5 cursor-pointer hover:bg-button-primary-pressed">
                                            <Globe width={25} height={25} />
                                            <span>Verified Accounts</span>
                                        </li>
                                        <li className="flex items-center px-2 text-xs font-bold hover:text-button-primary-text space-x-3 py-1.5 cursor-pointer hover:bg-button-primary-pressed">
                                            <Globe width={25} height={25} />
                                            <span>Only accounts you mention</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Popover.Body>
                    </Popover>
                    <div className="flex ml-2 text-button-primary-background/55 items-center">
                        <Btn icon={Media} />
                        <Btn icon={Lists} />
                        <Btn icon={Calendar} />
                        <Btn icon={EmojiIconLine} />
                    </div>
                    <div className="ml-auto flex items-center  space-x-2">
                        <div className="text-xs">
                            {ctx.remainderTextWord > 0 ? <span>{ctx.remainderTextWord}</span> : <span className="text-red-500">{ctx.remainderTextWord}</span>}
                        </div>
                        <div className="h-5 w-5">
                            <CircularProgressbar
                                styles={buildStyles({
                                    pathColor: ctx.remainderTextWord > 0 ? "blue" : "red",
                                })} strokeWidth={10} value={ctx.remainderTextPercentage} />
                        </div>
                        <button className="bg-button-primary-background px-5 text-xs text-button-primary-text cursor-pointer font-semibold py-2 rounded-full">POST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}