import { Avatar } from "@/features/profile/Avatar";
import { CreatePostContextProvider } from "../contexts/CreatePostContextProvider";
import { CreatePostFormContent } from "./CreatePostForm";
import { CreatePostCompose } from "./CreatePostCompose";

const CreatePost = () => {
    return <CreatePostContextProvider>
        <CreatePostCompose/>
    </CreatePostContextProvider>
}
export default CreatePost;