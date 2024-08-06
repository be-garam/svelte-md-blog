<script>
    export let data;
    const { post } = data;
  </script>
  
  <div class="bg-glass dark:bg-glass-dark backdrop-filter backdrop-glass rounded-lg shadow-lg p-6">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{post.meta.title}</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Published on {new Date(post.meta.date).toLocaleDateString()}
    </p>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      {@html post.html}
    </div>
  </div>