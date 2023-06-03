<script>
	import '../app.css'
	import Navbar from '../components/Navbar.svelte'
	import Footer from '../components/Footer.svelte'
</script>

<svelte:head>
	<title>Jonichi | Mechanical Engineer x Web Developer</title>
	<meta
		name="description"
		content="Jonichi is a mechanical engineer with a passion for programming. Explore his portfolio showcasing projects in full-stack development."
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />
<slot />
<Footer />
