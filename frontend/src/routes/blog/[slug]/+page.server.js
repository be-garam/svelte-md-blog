import { getPost } from '$lib/utils/markdown';

export async function load({ params }) {
    const post = await getPost(params.slug);
    return { post };
}