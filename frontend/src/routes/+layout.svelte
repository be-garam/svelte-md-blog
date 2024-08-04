<script>
import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My Blog</span>
  </NavBrand>
  <NavHamburger on:click="{toggle}"></NavHamburger>
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/blog">Blog</NavLi>
  </NavUl>
</Navbar>

<main class="container mx-auto mt-4 px-4">
    <slot></slot>
</main>
