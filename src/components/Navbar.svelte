<script>
	import logo from '$lib/assets/jonichi-logo.svg'

	let hidden = true

	const handleClose = () => {
		hidden = true
	}

	const handleOpen = () => {
		hidden = false
	}
</script>

<header>
	<nav
		class="flex flex-col w-11/12 max-w-5xl mx-auto py-3 | md:py-5 md:flex-row md:items-center md:justify-between"
	>
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-2">
				<img src={logo} alt="Jonichi" width="48" height="48" class="w-10 | md:w-12" />
				<p class="uppercase hidden | md:block">jonichi</p>
			</a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 hover:cursor-pointer {hidden ? 'block' : 'hidden'} | md:hidden"
				on:click={handleOpen}
				on:keydown={handleOpen}
				><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 hover:cursor-pointer {hidden ? 'hidden' : 'block'} | md:hidden"
				on:click={handleClose}
				on:keydown={handleClose}
				><title>close</title><path
					d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
				/></svg
			>
		</div>
		<div
			class="flex flex-col gap-2 py-5 uppercase font-bold text-center {hidden
				? 'hidden'
				: 'block'} | md:flex md:flex-row md:gap-4"
		>
			<a href="/" on:click={handleClose} class="hover:underline underline-offset-1 decoration-wavy"
				>Home</a
			>
			<a
				href="#about"
				on:click={handleClose}
				class="hover:underline underline-offset-1 decoration-wavy">About Me</a
			>
			<a
				href="#skills"
				on:click={handleClose}
				class="hover:underline underline-offset-1 decoration-wavy">Skills</a
			>
			<a
				href="#projects"
				on:click={handleClose}
				class="hover:underline underline-offset-1 decoration-wavy">Projects</a
			>
			<a
				href="#contacts"
				on:click={handleClose}
				class="hover:underline underline-offset-1 decoration-wavy">Contacts</a
			>
		</div>
	</nav>
</header>
