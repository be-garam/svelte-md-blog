<script>
    export let darkMode = false;
    export let toggleDarkMode;
</script>

<nav
    class="bg-glass dark:bg-glass-dark backdrop-filter backdrop-glass border-b border-gray-200 dark:border-gray-700"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <a
                    href="/"
                    class="text-2xl font-bold text-gray-900 dark:text-white"
                    >My Blog</a
                >
            </div>
            <div class="flex items-center">
                <a
                    href="/"
                    class="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >Home</a
                >
                <a
                    href="/blog"
                    class="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >Blog</a
                >
                <button
                    on:click={toggleDarkMode}
                    class="ml-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                    {darkMode ? "🌞" : "🌙"}
                </button>
            </div>
        </div>
    </div>
</nav>
