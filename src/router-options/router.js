import {createRouter, createWebHistory} from 'vue-router'
import Posts from "@/router/Posts.vue";
import Post from "@/router/Post.vue";
import NewPost from "@/router/NewPost.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/posts',
            component: Posts,
            children: [
                {
                    path: 'new',
                    component: NewPost
                },
                {
                    path: ':id',
                    component: Post
                }
            ]
        }
    ]
})

export {router}