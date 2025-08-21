import { Composer } from "./Composer"
import { ComposerContextProvider } from "./contexts/ComposerContextProvider"

export default () => {
    return <ComposerContextProvider>
        <Composer />
    </ComposerContextProvider>
}