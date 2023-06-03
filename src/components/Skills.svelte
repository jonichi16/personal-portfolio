<script>
	import tech from '$lib/data/tech'
	import tools from '$lib/data/tools'

	import SkillsCard from './SkillsCard.svelte'
</script>

<section class="py-24">
	<h2 id="skills" class="font-bold text-xl mb-3 | sm:text-4xl sm:text-center">Skills</h2>
	<div class="flex flex-col gap-4 | md:flex-row md:px-2 md:gap-6">
		<SkillsCard title="Technologies" icons={tech} />
		<SkillsCard title="Tools" icons={tools} />
	</div>
</section>
