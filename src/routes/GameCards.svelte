<script>
	import { onMount } from 'svelte';
	import { flipped, matchedCount, moves, busy } from '$lib/store';

	let { src, theme } = $props();
	let showImage = $state(false);
	let cardRef;
	let clickAudio, matchedAudio;

	function hide() {
		showImage = false;
	}

	function handleClick() {
		if (showImage || $busy) return;

		showImage = true;
		flipped.update((f) => [...f, { src, ref: cardRef }]);
		clickAudio.play();
	}

	onMount(() => {
		if (cardRef) {
			cardRef.hide = hide;
		}
	});

	$effect(() => {
		if ($flipped.length === 2) {
			const [first, second] = $flipped;
			busy.set(true);
			if (first.ref !== cardRef) return;

			if (first.src !== second.src) {
				setTimeout(() => {
					first.ref.hide();
					second.ref.hide();
					flipped.set([]);
					busy.set(false);
				}, 1000);
			} else {
				matchedCount.update((c) => c + 1);
				matchedAudio.play();
				flipped.set([]);
				busy.set(false);
			}

			moves.update((current) => current - 1);
		}
	});
</script>

<audio bind:this={clickAudio} src="Audio/click.wav" preload="auto"></audio>
<audio bind:this={matchedAudio} src="Audio/matched.wav" preload="auto"></audio>
<button
	bind:this={cardRef}
	onclick={handleClick}
	disabled={$busy}
	class="relative h-24 w-20 transform-gpu cursor-pointer rounded-lg shadow [perspective:800px] hover:shadow-lg sm:h-35 sm:w-30"
>
	<div
		class="h-full w-full transform-gpu transition-transform duration-300 [transform-style:preserve-3d]"
		style:transform={showImage ? 'rotateY(180deg)' : 'rotateY(0deg)'}
	>
		<div
			class="absolute inset-0 flex items-center justify-center bg-black text-2xl font-bold text-white [backface-visibility:hidden]"
		>
			?
		</div>

		<div
			class="absolute inset-0 flex [transform:rotateY(180deg)] items-center justify-center overflow-hidden bg-white [backface-visibility:hidden]"
		>
			<img src={`src/images/${theme}/${src}.svg`} alt={src} class="h-full w-full object-contain" />
		</div>
	</div>
</button>
