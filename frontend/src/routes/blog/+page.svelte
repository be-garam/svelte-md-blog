<script>
    import { getAllPosts } from '$lib/utils/markdown';
  
    const posts = getAllPosts();
  </script>
  
  <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Blog Posts</h1>
  
  <div class="space-y-6">
    {#each posts as post}
      <div class="bg-glass dark:bg-glass-dark backdrop-filter backdrop-glass rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          <a href="/blog/{post.slug}" class="hover:underline">{post.meta.title}</a>
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-2">{post.meta.description}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Published on {new Date(post.meta.date).toLocaleDateString()}
        </p>
      </div>
    {/each}
  </div>