<script>
    import { getPost } from '$lib/utils/markdown';
    import { Card } from 'flowbite-svelte';

    export let data;
    const { post } = data;
</script>

<Card>
    <h1 class="text-3xl font-bold mb-4">{post.meta.title}</h1>
    <p class="text-sm text-gray-500 mb-4">
        Published on {new Date(post.meta.date).toLocaleDateString()}
    </p>
    <div class="prose prose-lg dark:prose-invert">
        {@html post.html}
    </div>
</Card>