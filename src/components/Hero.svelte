<script>
	import terminal from '$lib/assets/images/browser_icon_4.svg'
	import SocialLinks from './SocialLinks.svelte'
</script>

<section class="flex justify-between items-center py-24">
	<div class="space-y-5">
		<div>
			<p class="text-xs | md:text-xl">Hi, my name is</p>
			<h1 class="uppercase font-bold text-2xl leading-none | md:text-5xl">Jhonel Villanueva</h1>
			<h2 class="text-xs | md:text-xl">Mechanical Engineer | Web Developer</h2>
		</div>
		<SocialLinks />
		<a
			href="mailto:jonichi16@gmail.com"
			class="inline-block bg-gray-900 border-2 border-gray-900 font-bold text-xs text-gray-50 py-2 px-3 rounded transition duration-200 hover:bg-gray-50 hover:text-gray-900 | md:text-base md:py-3 md:px-4"
			>Contact Me</a
		>
	</div>
	<img src={terminal} alt="Terminal" class="w-4/12 hidden | sm:block" />
</section>
