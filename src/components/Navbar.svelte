<script>
	import logo from '$lib/assets/jonichi-logo.svg'
</script>

<header>
	<nav class="flex items-center justify-between w-11/12 max-w-5xl mx-auto py-3 | md:py-5">
		<a href="/" class="flex items-center gap-2">
			<img src={logo} alt="Jonichi" class="w-10 | md:w-12" />
			<p class="uppercase hidden | md:block">jonichi</p>
		</a>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 | md:hidden"
			><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg
		>
		<div class="uppercase font-bold space-x-4 hidden | md:block">
			<a href="#">About Me</a>
			<a href="#">Skills</a>
			<a href="#">Projects</a>
			<a href="#">Contacts</a>
		</div>
	</nav>
</header>
