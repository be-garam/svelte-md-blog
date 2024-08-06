import { getAllPosts } from '$lib/utils/markdown';

export async function load() {
    const posts = await getAllPosts();
    return { posts };
}