<script>
    import Hero from "$lib/components/Home/Hero.svelte";
    import Benifits from "$lib/components/Home/Benifits.svelte";
    import Features from "$lib/components/Home/Features.svelte";
	import Testimonial from '$lib/components/Home/Testimonial.svelte';
    import CTA from '$lib/components/Home/CTA.svelte';
    import FAQs from '$lib/components/Home/FAQs.svelte';

</script>

<div>
    <Hero/>
    <Benifits/>
    <Features/>
    <Testimonial/>
    <CTA/>
    <FAQs/>
</div>


<script>
    import "../app.css";
    import Header from '$lib/components/Common/Header.svelte';
    import Footer from "$lib/components/Common/Footer.svelte";
    import ContactUs from "$lib/components/Common/ContactUs.svelte";
</script>

<div class="p-5 bg-gray-900">
  <Header />
  <slot />
  <ContactUs/>
  <Footer />
</div>