import { ComposerContextProviderType } from "../contexts/ComposerContextProvider";

export function trans(text: ComposerContextProviderType['visibility']) {
    let key: ComposerContextProviderType['visibility'] = text.toLowerCase() as ComposerContextProviderType['visibility'];
    switch (key) {
        case 'everyone':
            return "Semua Orang"
            break;
        case 'followers':
            return "Hanya Pengikut"
            break;
        case 'verified':
            return "Akun Terverifikasi"
            break;
        case 'mentioned':
            return "Hanya Akun yang Disebutkan"
            break;
        default:
            break;
    }
}