<script>
  import Netsepio from "$lib/images/net.png"
</script>

<style>
  .gradient-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(11,255,0,0.055059523809523836) 0%, rgba(0,0,0,0.6488970588235294) 100%);
    z-index: 1;
    opacity: 0.9;
  }
</style>

<div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">

        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto relative">
          <div class="gradient-layer rounded-lg shadow-lg shadow-green-300"></div>
          <img src={Netsepio} loading="lazy" alt="Netsepio" class="h-full w-full object-cover object-center" />
        </div>
  
        <div class="md:pt-8">  
          <h1 class="mb-4 text-center text-2xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-200 to-lime-200 sm:text-3xl md:mb-6 md:text-left">Why Netsepio?</h1>
  
          <p class="mb-6 text-gray-300 sm:text-lg md:mb-8 mt-16">
            Are you tired of worrying about online threats? NetSepio has the answer. Our decentralized review management system leverages blockchain technology to keep you safe.
            <br/>
            <br/>
            NetSepio allows you to categorize websites and report unsafe content while earning NFT rewards. Plus, our Web3 Archive ensures you always have access to your favorite content. With DAO-driven governance, you can actively participate in community decision-making for website listings.
            <br/>
            <br/>
            But that's not all. Our crypto wallet supports multiple chains for secure management of digital assets. And with access to VPN, storage, SSI, and more, you'll have everything you need for online safety.
            <br/>
            <br/>
            At NetSepio, we're committed to keeping the internet safe. Our experts work tirelessly to provide top-notch protection against online threats. Download NetSepio today and experience the future of decentralized cybersecurity.
          </p>
        </div>
      </div>
    </div>
  </div>