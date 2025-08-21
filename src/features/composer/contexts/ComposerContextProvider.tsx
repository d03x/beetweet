import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"

type ComposerContextProviderType = {
    richText: string,
    plainText: string,
    remainderTextPercentage: number,
    setRichText: (a: any) => void,
    setPlainText: (a: any) => void,
    setVisibility: (a: any) => void,
    maxWords: number,
    visibility: 'everyone' | 'followers' | 'verified' | 'mentioned',
    remainderTextWord: number,
}

const ComposerProvider = createContext<ComposerContextProviderType>({
    richText: '',
    plainText: '',
    remainderTextPercentage: 0,
    maxWords: 60,
    visibility: 'everyone',
    setVisibility() { },
    remainderTextWord: 0,
    setRichText: () => { },
    setPlainText() {

    },
})

const ComposerContextProvider = ({ children }: { children: ReactNode }) => {
    const [richText, setRichText] = useState<string>('');
    const [plainText, setPlainText] = useState<string>('');

    const [maxWords, setMaxWords] = useState<number>(60)
    const [visibility, setVisibility] = useState<ComposerContextProviderType['visibility']>('everyone')

    const [remainderTextPercentage, setRemainderTextPercentage] = useState<number>(0)
    const [remainderTextWord, setRemainderTextWord] = useState<number>(0)
    useEffect(() => {
        const words = plainText.split(/\s+/).filter(Boolean);

        setRemainderTextWord(maxWords - words.length)

        setRemainderTextPercentage(Math.round((words.length / maxWords) * 100))

    }, [plainText])

    useEffect(() => {
        setRemainderTextWord(maxWords)
    }, [maxWords])

    return <ComposerProvider.Provider value={{ plainText, richText, setRichText, setPlainText, setVisibility, visibility, remainderTextPercentage, remainderTextWord, maxWords }}>
        {children}
    </ComposerProvider.Provider>
}


const useComposer = () => {
    return useContext(ComposerProvider)
}


export {
    useComposer,
    ComposerContextProvider,
    type ComposerContextProviderType,
}