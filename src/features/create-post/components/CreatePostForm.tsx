import { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from "react"
import { useCreatePostContext } from "../contexts/CreatePostContextProvider"

export const CreatePostFormContent = () => {
    const divRef = useRef<HTMLDivElement>(null)
    const ctx = useCreatePostContext()
    const setTextChange = () => {
        if (!divRef.current) return;
        const text = divRef.current.innerText;
        ctx.setContent(text);
      
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);    // masukkan tanpa style
    }


    return <div
        ref={divRef}
        contentEditable
        onPaste={handlePaste}
        onInput={setTextChange}
        data-placeholder="What is happening?!"
        className="break-all cursor-text w-full outline-none text-lg whitespace-pre-wrap break-words px-1
                       empty:before:text-text-secondary empty:before:content-[attr(data-placeholder)]"
    >
    </div>
}

