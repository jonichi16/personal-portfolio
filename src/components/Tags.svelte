<script>
	export let tags = []
</script>

<div class="flex gap-2">
	{#each tags as tag, i (i)}
		<div class="bg-gray-900 text-gray-50 text-sm px-4 py-1 rounded-full">{tag}</div>
	{/each}
</div>
