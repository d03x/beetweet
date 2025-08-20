import { Avatar } from "@/features/profile/Avatar"
import { CreatePostFormContent } from "./CreatePostForm"
import { Calendar, EmojiIconLine, Fire, Globe, HeartIconFilled, HeartIconOutline, Lists, Media, MediaGif, UserIconOutline, VerifiedIcon } from "@/components/icon"
import Popover from "@/components/UI/Popover"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useEffect, useState } from "react";
import { useCreatePostContext } from "../contexts/CreatePostContextProvider";
import { Btn } from "./Btn";
import { SelectVisibility } from "./SelectVisibility";
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
                    <SelectVisibility />
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