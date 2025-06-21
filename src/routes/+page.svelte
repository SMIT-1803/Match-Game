<script>
	import GameCards from './GameCards.svelte';
	import { cards, theme } from '$lib/store';
	import { goto } from '$app/navigation';
</script>

<main class="flex min-h-screen flex-col items-center space-y-10 bg-gradient-to-b from-primary-light to-neutral-light py-12 justify-center gap-15">
  <h1 class="text-3xl sm:text-7xl font-extrabold tracking-tight text-primary">Memory Match Game</h1>

  <button
    onclick={() => goto('/theme')}
    class="btn-primary px-8 py-3 text-lg hover:shadow-2xl bg-black text-white rounded-md cursor-pointer"
  >
    New Game
  </button>
</main>