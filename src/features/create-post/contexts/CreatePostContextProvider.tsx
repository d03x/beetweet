import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"

type CreatePostContextProviderType = {
    content: string,
    remainderTextPercentage: number,
    setContent: (a: any) => void,
    setVisibility: (a: any) => void,

    maxWords: number,
    visibility: 'everyone' | 'followers' | 'verified' | 'mentioned',
    remainderTextWord: number,
}

const CreateContextProvider = createContext<CreatePostContextProviderType>({
    content: '',
    remainderTextPercentage: 0,
    maxWords: 350,
    visibility: 'everyone',
    setVisibility() { },
    remainderTextWord: 0,
    setContent: () => { }
})

const CreatePostContextProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<string>('');
    const [maxWords, setMaxWords] = useState<number>(350)
    const [visibility, setVisibility] = useState<CreatePostContextProviderType['visibility']>('everyone')

    const [remainderTextPercentage, setRemainderTextPercentage] = useState<number>(0)
    const [remainderTextWord, setRemainderTextWord] = useState<number>(0)
    useEffect(() => {
        setRemainderTextWord(maxWords - content.length)

        setRemainderTextPercentage((content.length / maxWords) * 100)

    }, [content])

    useEffect(() => {
        setRemainderTextWord(maxWords)
    }, [maxWords])

    return <CreateContextProvider.Provider value={{ content, setVisibility, visibility, remainderTextPercentage, remainderTextWord, setContent, maxWords }}>
        {children}
    </CreateContextProvider.Provider>
}


const useCreatePostContext = () => {
    return useContext(CreateContextProvider)
}


export {
    useCreatePostContext,
    CreatePostContextProvider,
    type CreatePostContextProviderType,
}