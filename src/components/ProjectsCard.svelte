<script>
	import githubIcon from '$lib/assets/icons/github.svg'
	import liveIcon from '$lib/assets/icons/open-in-new.svg'
	import Tags from './Tags.svelte'

	export let project = {}
</script>

<div class="shadow-md border rounded-md h-full">
	<div class="flex justify-center bg-gray-300 rounded-t-md">
		<img src={project.src} alt={project.name} width="384" height="420" class="w-sm h-102" />
	</div>
	<div class="p-3 pb-5">
		<div class="flex justify-between items-center mb-2">
			<h3 class="font-bold text-lg | md:text-2xl">{project.name}</h3>
			<div class="flex gap-2 | md:gap-4">
				<a href={project.github} target="_blank">
					<img src={githubIcon} alt="Github Link" width="24" height="24" class="w-5 | md:w-7" />
				</a>
				<a href={project.live} target="_blank">
					<img src={liveIcon} alt="Live Link" width="24" height="24" class="w-5 | md:w-7" />
				</a>
			</div>
		</div>
		<p class="text-sm mb-4 | md:text-base">{project.description}</p>
		<Tags tags={project.tags} />
	</div>
</div>
