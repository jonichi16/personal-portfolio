<script>
	export let title = ''
	export let icons = {}
</script>

<div class="shadow-md py-4 border">
	<h3 class="font-bold text-center text-xl pb-4">{title}</h3>
	<ul class="flex flex-wrap justify-center gap-x-9 gap-y-4">
		{#each icons as icon (icon.id)}
			<li>
				<img src={icon.src} alt={icon.alt} class="w-12" />
			</li>
		{/each}
	</ul>
</div>
