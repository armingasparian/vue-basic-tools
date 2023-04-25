import {testPosts} from "@/3microblog/testPosts";
import {ref} from "vue";

export function usePosts() {
    const posts = ref(testPosts)
    const addPost = (post) => {
        posts.value.push(post)
    }

    return {
        posts, addPost
    }
}