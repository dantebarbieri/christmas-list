<script lang="ts">
	import { page } from '$app/stores';
	import { outer } from './icon-path';
</script>

<header>
	<div class="corner">
		<a href="/">
			<svg viewBox="0 0 20.833 20.833">
                <path d={outer}/>
            </svg>
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="navlink" href="/">Home</a>
			</li>
            <li aria-current={$page.url.pathname === '/list' ? 'page' : undefined}>
				<a class="navlink" href="/list">My List</a>
			</li>
			<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
				<a class="navlink" href="/login">Login</a>
			</li>
			<li aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
				<a class="navlink" href="/register">Register</a>
			</li>
            <li>
				<a class="navlink" href="/logout">Logout</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1em;
		background-color: var(--color-bg-2);
	}

	.corner {
		width: 4em;
		height: 4em;
		padding: 1em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner svg {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

    path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		/* stroke: var(--color-text); */
		fill: var(--color-text);
	}

    path:hover {
		fill: var(--color-theme-1);
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		align-items: stretch;
		list-style: none;
		gap: 1em;
		background-size: contain;
	}

	li {
		display: block;
		position: relative;
		height: 100%;
		width: 5.5em;
	}

	.navlink {
		border-width: 2px;
		border-style: solid;
		border-color: var(--color-text);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li[aria-current='page'] > .navlink {
		border-color: var(--color-theme-1);
	}

	li > .navlink:hover {
		border-color: var(--color-theme-2);
	}

	li[aria-current='page']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
        pointer-events: none;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
