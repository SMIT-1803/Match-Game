<script>
	import { goto } from '$app/navigation';
	let optionSelected = $state();
	let difficulty = $state();
	import { theme, levelOfDifficulty } from '$lib/store';

	function setTheme() {
		theme.set(optionSelected);
		levelOfDifficulty.set(difficulty);
		goto('/game');
	}
</script>

<div
	class="from-secondary-light to-neutral-light flex min-h-screen items-center justify-center bg-gradient-to-br p-6"
>
	<div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
		<h2 class="text-neutral-dark mb-8 text-center text-2xl font-extrabold sm:text-3xl">
			Choose Your Game
		</h2>

		<div class="space-y-6">
			<div>
				<label for="theme" class="text-neutral-dark mb-2 block font-medium">Theme</label>
				<select
					id="theme"
					bind:value={optionSelected}
					class="focus:ring-secondary w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:ring-2 focus:outline-none"
				>
					<option>Animals</option>
					<option>Emojis</option>
				</select>
			</div>

			<div>
				<label for="difficulty" class="text-neutral-dark mb-2 block font-medium">Difficulty</label>
				<select
					id="difficulty"
					bind:value={difficulty}
					class="focus:ring-secondary w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:ring-2 focus:outline-none"
				>
					<option>Easy</option>
					<option>Medium</option>
					<option>Hard</option>
				</select>
			</div>
		</div>

		<button
			onclick={setTheme}
			class="btn-secondary mt-10 w-full cursor-pointer rounded-md bg-black py-3 text-lg text-white"
		>
			Play {optionSelected}
		</button>
	</div>
</div>
