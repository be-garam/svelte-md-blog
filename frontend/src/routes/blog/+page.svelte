<script>
  import BlogPost from '$lib/components/BlogPost.svelte';
  export let data;
</script>

<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Blog Posts</h1>

<div class="space-y-6">
  {#if data.posts && data.posts.length > 0}
    {#each data.posts as post}
      <BlogPost {post} />
    {/each}
  {:else}
    <p class="text-gray-700 dark:text-gray-300">No posts found.</p>
  {/if}
</div>