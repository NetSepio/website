<script>
	import Dashboard from '$lib/images/dashboard_screenshot.png';
	import Wallet from '$lib/images/Locked_wallet_screenshot.png';
	import Profile from '$lib/images/Profile_screenshot.png';
</script>

<div class="m-16">
	<div class="flex px-10">
		<div class="card-secondary !p-0 m-4">
			<div class="bg-shine h-full w-full flex flex-col justify-center items-center p-16">
				<h2 class="text-h2 text-center">The Easiest Way to Check a Website's Safety</h2>
				<img src={Dashboard} alt="NetSepio Dashboard" />
			</div>
		</div>
		<div class="card-secondary !p-0 m-4">
			<div
				class="bg-shine shine-reverse h-full w-full flex flex-col justify-center items-center p-16"
			>
				<h2 class="text-h2 text-center">Connect Your Wallet with just One Click</h2>
				<img src={Wallet} alt="Crypto Wallet in NetSepio" />
			</div>
		</div>
	</div>
	<div class="overflow-hidden px-14 mt-4">
		<div class="card-secondary flex justify-center items-center h-full w-full !pb-0">
			<img src={Profile} alt="NetSepio Profile" />
			<h1 class="text-h2 text-center">Let's start a better communication</h1>
		</div>
	</div>
</div>

<style>
	.bg-shine {
		background-image: url('/src/lib/images/card_background_shine.png');
	}
</style>
