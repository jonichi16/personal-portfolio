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

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
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
