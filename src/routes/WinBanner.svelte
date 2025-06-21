<script>
	import { goto } from '$app/navigation';
	function handleClick() {
		goto('/theme');
	}
</script>

<div class="mx-auto max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
	<h1 class="text-neutral-dark mb-6 text-2xl font-extrabold sm:text-3xl">Congratulations!</h1>
	<button on:click={handleClick} class="btn-primary px-6 py-3"> New Game </button>
</div>
