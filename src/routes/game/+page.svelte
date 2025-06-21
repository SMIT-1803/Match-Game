<script>
	import { theme, cards, flipped, matchedCount, moves, levelOfDifficulty } from '$lib/store';
	import WinBanner from '../WinBanner.svelte';
	import GameCards from '../GameCards.svelte';
	if ($levelOfDifficulty === 'Easy') {
		moves.set(48);
	}
	if ($levelOfDifficulty === 'Medium') {
		moves.set(24);
	}
	if ($levelOfDifficulty === 'Hard') {
		moves.set(16);
	}

	const TOTAL_PAIRS = 8;
	let congratulations;

	let selectedTheme = $theme;
	let allCards = {
		Animals: [
			'Lion',
			'Tiger',
			'Bear',
			'Crocodile',
			'Elephant',
			'Giraffe',
			'Kangaroo',
			'Deer',
			'Lion',
			'Tiger',
			'Bear',
			'Crocodile',
			'Elephant',
			'Giraffe',
			'Kangaroo',
			'Deer'
		],
		Fruits: [
			'Mango',
			'Apple',
			'Banana',
			'Orange',
			'Pineapple',
			'Strawberry',
			'Grapes',
			'Watermelon',
			'Mango',
			'Apple',
			'Banana',
			'Orange',
			'Pineapple',
			'Strawberry',
			'Grapes',
			'Watermelon'
		],
		Emojis: [
			'Laugh',
			'Cry',
			'Sad',
			'Angry',
			'Surprised',
			'Confused',
			'Love',
			'Sleepy',
			'Laugh',
			'Cry',
			'Sad',
			'Angry',
			'Surprised',
			'Confused',
			'Love',
			'Sleepy'
		],
		Transport: [
			'Plane',
			'Car',
			'Train',
			'Boat',
			'Bicycle',
			'Bus',
			'Helicopter',
			'Scooter',
			'Plane',
			'Car',
			'Train',
			'Boat',
			'Bicycle',
			'Bus',
			'Helicopter',
			'Scooter'
		],
		Weather: [
			'Rainy',
			'Summer',
			'Winter',
			'Spring',
			'Cloudy',
			'Windy',
			'Stormy',
			'Foggy',
			'Rainy',
			'Summer',
			'Winter',
			'Spring',
			'Cloudy',
			'Windy',
			'Stormy',
			'Foggy'
		]
	};

	let cardsToBeChoosenFrom = allCards[selectedTheme];
	let pool = [...cardsToBeChoosenFrom];
	let pattern = [];

	for (let i = 0; i < 4; i++) {
		let tempArr = [];
		for (let j = 0; j < 4; j++) {
			let randomNumber = Math.floor(Math.random() * pool.length);
			tempArr.push(pool[randomNumber]);
			pool.splice(randomNumber, 1);
		}
		pattern.push(tempArr);
	}
	cards.set(pattern);
</script>

<audio bind:this={congratulations} src="Audio/Congratulations.mp3" preload="auto"></audio>
<main class="bg-neutral-light min-h-screen px-4 py-2">
	{#if TOTAL_PAIRS === $matchedCount}
		{congratulations.play()}
		<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
			<WinBanner />
		</div>
	{:else}
		<div class="mx-auto max-w-3xl space-y-6">
			<div class="flex items-center justify-between rounded-lg bg-white px-6 py-4 shadow">
				<div class="text-neutral-dark font-medium">
					Moves Left: <span class="text-xl font-bold text-red-500">{$moves}</span>
				</div>
				<div class="text-neutral-dark font-medium">
					Pairs Found: <span class="text-accent text-xl font-bold">{$matchedCount}</span>
				</div>
			</div>
			<div class="grid grid-cols-4 justify-items-center gap-4">
				{#each $cards as row}
					{#each row as element}
						<GameCards theme={selectedTheme} src={element} />
					{/each}
				{/each}
			</div>
		</div>
	{/if}
</main>
