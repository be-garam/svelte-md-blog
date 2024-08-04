<script>
    import { getAllPosts } from '$lib/utils/markdown';
    import { Card } from 'flowbite-svelte';

    const posts = getAllPosts();
</script>

<h1 class="text-3xl font-bold mb-4">Blog Posts</h1>

{#each posts as post}
    <Card class="mb-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="/blog/{post.slug}">{post.meta.title}</a>
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {post.meta.description}
        </p>
        <p class="text-sm text-gray-500 mt-2">
            Published on {new Date(post.meta.date).toLocaleDateString()}
        </p>
    </Card>
{/each}