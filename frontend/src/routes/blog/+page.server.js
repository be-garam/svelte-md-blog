import { getAllPosts } from '$lib/utils/markdown';

export async function load() {
    try {
        const posts = await getAllPosts();
        return { posts };
    } catch (error) {
        console.error('Error loading posts:', error);
        return { posts: [] };
    }
}