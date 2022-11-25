<script lang="ts">
	import { onMount } from 'svelte';

	export let name: string;
	export let items: string[];

	let scrollBox: HTMLUListElement;
	let scrollTop: number;
	let maxScrollTop: number;

	onMount(() => {
		scrollTop = scrollBox.scrollTop;
		maxScrollTop = scrollBox.scrollHeight - scrollBox.clientHeight;
	});
</script>

<svelte:window on:resize={() => (maxScrollTop = scrollBox.scrollHeight - scrollBox.clientHeight)} />

<a class="no-link" href="/list/{name}">
	<article class="xmas-list">
		<header>
			<h2>{name}'s List</h2>
		</header>
		<section class:off-top={scrollTop > 0} class:off-bottom={scrollTop < maxScrollTop}>
			<ul bind:this={scrollBox} on:scroll={() => (scrollTop = scrollBox.scrollTop)}>
				{#each items as item}
					<li>{item}</li>
				{/each}
			</ul>
			<div class="shadow shadow-top" aria-hidden="true" />
			<div class="shadow shadow-bottom" aria-hidden="true" />
		</section>
	</article>
</a>

<style>
	.xmas-list {
		box-shadow: 0 0 8px 0 var(--color-shadow);
		transition: 0.3s;
		--border-radius: 5px;
		border-radius: var(--border-radius);
		background-color: var(--color-bg-1);
	}

	.xmas-list:hover {
		box-shadow: 0 0 16px 0 var(--color-shadow);
	}

	.xmas-list h2 {
		text-align: center;
		margin: 0 auto;
	}

	.xmas-list ul {
		margin: 0;
		padding: 0;
		padding-left: inherit;

		line-height: var(--line-height);
		height: calc(var(--max-lines) * 1em * var(--line-height));
		overflow-y: auto;

		list-style-type: '🎁 ';
	}

	.xmas-list > section {
		padding: 0.5em 1.5em;
		position: relative;
		--max-lines: 9;
		--line-height: 1.4;
	}

	.xmas-list > header {
		padding: 0.5em 0;
		width: 100%;
		background-color: var(--color-bg-2);
		overflow: hidden;
		border-radius: var(--border-radius) var(--border-radius) 0 0;
	}

	.shadow {
		bottom: 0;
		left: 0;
		pointer-events: none;
		position: absolute;
		right: 0;
		top: 0;
		transition: all 0.2s ease-out;
	}
	.off-top .shadow-top {
		box-shadow: 0 3em 2em -1em var(--color-bg-2) inset;
		/* box-shadow: 0 2em 1em -1em red inset; */
	}
	.off-bottom .shadow-bottom {
		box-shadow: 0 -3em 2em -1em var(--color-bg-2) inset;
		border-radius: 0 0 var(--border-radius) var(--border-radius);
		/* box-shadow: 0 -2em 1em -1em red inset; */
	}
</style>
