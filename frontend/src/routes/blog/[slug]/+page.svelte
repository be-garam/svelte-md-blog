<script>
  export let data;
</script>

{#if data.post}
  <div
    class="bg-glass dark:bg-glass-dark backdrop-filter backdrop-glass rounded-lg shadow-lg p-6"
  >
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
      {data.post.meta.title}
    </h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Published on {new Date(data.post.meta.date).toLocaleDateString()}
    </p>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      {@html data.post.html}
    </div>
  </div>
{:else}
  <p class="text-gray-700 dark:text-gray-300">Post not found.</p>
{/if}
