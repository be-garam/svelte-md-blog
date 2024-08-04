import { getPost } from '$lib/utils/markdown';

export function load({ params }) {
    const post = getPost(params.slug);
    return { post };
}