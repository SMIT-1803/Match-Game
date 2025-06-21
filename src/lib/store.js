import { writable, derived } from 'svelte/store';

export const theme = writable("Animals");
export const cards = writable([]);
export const flipped = writable([]);
export const matchedCount = writable(0);
export const moves = writable(0);
export const levelOfDifficulty = writable("Easy")
export const busy = writable(false)
