<script lang="ts">
    import Header from './Header.svelte'
    import './styles.css'
</script>

<div>
    <Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; 2022 Dante Barbieri</p>
	</footer>
</div>

<style>
    div {
        display: flex;
		flex-direction: column;
		min-height: 100vh;
    }

    main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width: 580px) {
		main {
			max-width: 100%;
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>