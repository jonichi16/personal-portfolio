<script>
	import githubIcon from '$lib/assets/icons/github.svg'
	import liveIcon from '$lib/assets/icons/open-in-new.svg'
	import Tags from './Tags.svelte'

	export let project = {}
</script>

<div class="shadow-md border rounded-md h-full">
	<img src={project.src} alt={project.name} class="rounded-t-md" />
	<div class="p-3 pb-5">
		<div class="flex justify-between items-center mb-2">
			<h3 class="font-bold text-lg | md:text-2xl">{project.name}</h3>
			<div class="flex gap-2 | md:gap-4">
				<a href={project.github} target="_blank">
					<img src={githubIcon} alt="Github Link" class="w-5 | md:w-7" />
				</a>
				<a href={project.live} target="_blank">
					<img src={liveIcon} alt="Live Link" class="w-5 | md:w-7" />
				</a>
			</div>
		</div>
		<p class="text-sm mb-4 | md:text-base">{project.description}</p>
		<Tags tags={project.tags} />
	</div>
</div>
