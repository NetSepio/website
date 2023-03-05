<script>
	import ChromeLogo from '$lib/images/icons/chrome_logo.png';
</script>

<div
	class="min-h-[50vh] bg-[url('/src/lib/images/icons/NetSepio_logo.png')] bg-contain bg-no-repeat bg-center relative"
>
	<img src={ChromeLogo} alt="Chrome Logo" class="z-10 absolute top-36 left-24" />
	<img src={ChromeLogo} alt="Chrome Logo" class="z-10 absolute top-32 right-28" />
	<img src={ChromeLogo} alt="Chrome Logo" class="z-10 absolute bottom-24 right-36" />
	<img src={ChromeLogo} alt="Chrome Logo" class="z-10 absolute bottom-[7.5rem] left-32" />
	<div class="h-full flex flex-col justify-center items-center backdrop-blur-[30px]">
		<div>
			<h2 class="text-h2 mb-40">NetSepio Extension</h2>
		</div>
		<div>
			<p class="text-p w-[75vw] text-center mb-40">
				NetSepio is a decentralized review management system allowing the user to post a review for
				a specific domain on the polygon network with an additional feature of a crypto wallet which
				can be used to manage digital assets.
			</p>
		</div>
		<div class="flex justify-center items-center">
			<button type="submit" class="btn-secondary">Add to Chrome</button>
		</div>
	</div>
</div>
