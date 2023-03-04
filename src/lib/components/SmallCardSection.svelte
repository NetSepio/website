<script>
	import SmallCard from './SmallCard.svelte';
	const numberOfCards = 6;
</script>

<div class="p-16">
	<div class="flex flex-col justify-center items-center">
		<h2 class="text-h2">We've Got You Covered</h2>
		<p class="text-p my-16">NetSepio Allows You to Vote, Categorize Websites and Earn NFTs</p>
	</div>
	<div class="grid grid-cols-3 gap-5">
		{#each Array(numberOfCards) as _}
			<SmallCard />
		{/each}
	</div>
</div>
