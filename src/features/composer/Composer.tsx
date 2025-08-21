"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { ComposerContextProvider, useComposer } from "./contexts/ComposerContextProvider";
import { TextInput } from "./text-input/text-input"
import { Footer } from "./components/footer";
import { Avatar } from "../profile/Avatar";
import { SelectVisibility } from "./SelectVisibility";
import { useState } from "react";

const Composer = () => {
    const ctx = useComposer();

    const [showVisibilityBtn, setShowVisibilityBtn] = useState<boolean>(false)

    function onTextChange(html: string, plain?: string) {
        console.log("Text changed:", html);
        ctx.setRichText(html);
        ctx.setPlainText(plain || "");
    }
    function onFocus() {
        setShowVisibilityBtn(true);
    }
    function onBlur() {
        setShowVisibilityBtn(false);

    }
    return <div className="flex p-3 items-start">
        <div className="flex-1">
            <div className="flex items-start">
                <Avatar />
                <TextInput onBlur={onBlur} onFocus={onFocus} maxWords={ctx.maxWords} onTextChange={onTextChange} /></div>
            <div className="mt-3  space-y-2">
                <Footer
                    maxwordCount={ctx.maxWords}
                    remainderTextPercentage={ctx.remainderTextPercentage}
                    remainderTextWords={ctx.remainderTextWord}
                />
            </div>
        </div>
    </div>

}
export {
    Composer
}