import { CreatePostContextProviderType } from "../contexts/CreatePostContextProvider";

export function trans(text: CreatePostContextProviderType['visibility']) {
    let key: CreatePostContextProviderType['visibility'] = text.toLowerCase() as CreatePostContextProviderType['visibility'];
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