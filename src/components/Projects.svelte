<script>
	import projects from '$lib/data/projects'
	import ProjectsCard from './ProjectsCard.svelte'
</script>

<section class="py-24">
	<h2 id="projects" class="font-bold text-xl mb-3 | sm:mb-4 sm:text-4xl sm:text-center">
		Projects
	</h2>
	<ul class="grid gap-6 | md:grid-cols-2">
		{#each projects as project (project.id)}
			<li class="hover:scale-105">
				<a href={project.github} target="_blank">
					<ProjectsCard {project} />
				</a>
			</li>
		{/each}
	</ul>
</section>
