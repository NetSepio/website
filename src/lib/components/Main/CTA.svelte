<style>
  .parallax {
    /* The image used */
    background: rgb(0,0,0);
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.44441526610644255) 100%, rgba(0,0,0,1) 100%), url("../../images/cta.jpg");

    /* Set a specific height */
    min-height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* Flexbox styles for all devices */
  .parallax {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-center.sm\:text-left {
    text-align: center;
  }
</style>

<section>
  <div class="parallax p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="text-center sm:text-left">
      <h2 class="text-2xl font-bold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-200 to-lime-200 sm:text-3xl md:text-5xl">
        Download Now
      </h2>

      <p class="mt-5 max-w-lg text-gray-200 md:mt-6 md:block md:text-lg md:leading-relaxed">
        Download NetSepio now and experience the power of decentralized cybersecurity to protect your online presence from scams and malware.
      </p>

      <div class="mt-4 sm:mt-8">
        <a href="https://chrome.google.com/webstore/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd" class="inline-block rounded-lg bg-green-300 px-12 py-3 text-sm font-medium text-black transition hover:bg-green-200 focus:outline-none focus:ring focus:ring-yellow-400">
          Get Yours Today
        </a>
      </div>
    </div>
  </div>
</section>
