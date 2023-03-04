<script>
	import ChromeLogo from '$lib/images/icons/chrome_logo.png';
	import PlayIcon from '$lib/images/icons/play-icon.svg';
</script>

<div class="h-[80vh] flex justify-center items-center border-2 hero-bg-image">
	<div class="w-[30%] mr-12">
		<h1 class="text-h1 my-6">Cyber Security Meets Web3</h1>
		<p class="text-p my-6">
			NetSepio gives you the best internet protection from scams and malware leveraging the power of
			Blockchain.
		</p>
		<div class="flex items-center">
			<button class="btn-secondary mr-10"
				>Download for <span class="btn-right-icon"><img src={ChromeLogo} alt="chrome-logo" /></span
				></button
			>
			<button class="btn-primary"
				><span class="btn-left-icon"><img src={PlayIcon} alt="chrome-logo" /></span>Watch
			</button>
		</div>
	</div>
	<div class="w-[40%] h-[85%] ml-16 border-2 border-black flex justify-center items-center">
		<h1>Video goes here</h1>
	</div>
</div>

<style>
	.hero-bg-image {
		background-image: url('/src/lib/images/hero_section_background.png');
	}
</style>
