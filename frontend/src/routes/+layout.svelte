<script>
  import "../app.postcss";
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";

  let darkMode = false;

  onMount(() => {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    updateTheme();
  });

  function toggleDarkMode() {
    darkMode = !darkMode;
    updateTheme();
  }

  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<div
  class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300"
>
  <Header {darkMode} {toggleDarkMode} />

  <main class="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
    <slot />
  </main>
</div>
